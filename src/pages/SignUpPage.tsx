import { useState, FC } from "react";
import SignUpStepOne from "../components/SignUpStepOne";
import SignUpStepTwo from "../components/SignUpStepTwo";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UserFormInput, GenderEnum } from "../type";
import { Stepper } from "react-form-stepper";
import axios from "../axios";
import { useSelector } from "react-redux";
import { RootState } from "../rtk";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../assets";

const schema = yup.object().shape({
  firstname: yup.string().required("First name is required"),
  lastname: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
  telephone: yup.string().required("Telephone is required"),
  gender: yup
    .mixed<GenderEnum>()
    .oneOf(Object.values(GenderEnum))
    .required("Gender is required"),
  birth_date: yup.string().required("Birth date is required"),
});

const SignUpPage: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const job_interests = useSelector(
    (state: RootState) => state.jobInterests.jobList
  );
  const {
    register,
    trigger,
    getValues,
    formState: { errors },
  } = useForm<UserFormInput>({ resolver: yupResolver(schema) });

  const [step, setStep] = useState<number>(1);

  const handleSubmit = async () => {
    const data = getValues();
    if (job_interests.length === 0) {
      alert("Please add atleast one job you are interested in.");
    }

    const body = {
      name: `${data.firstname} ${data.lastname}`,
      email: data.email,
      password: data.password,
      gender: data.gender,
      telephone: data.telephone,
      workLocation: "",
      skills: "",
      jobTitle: "",
      domicile: "",
      photoUrl: "https://avatars.githubusercontent.com/u/32225588",
      jobInterests: job_interests,
    };

    try {
      setIsLoading(true);
      const { data }: any = await axios.post("/users/signup", body);
      setIsLoading(false);
      alert(data.message);
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      console.log("Error occured:", error);
    }
  };

  const validateStep = async () => {
    let valid = false;
    switch (step) {
      case 1:
        valid = await trigger([
          "firstname",
          "lastname",
          "email",
          "password",
          "telephone",
          "gender",
          "birth_date",
        ]);
        break;
      default:
        break;
    }
    return valid;
  };

  const handleNext = async () => {
    const valid = await validateStep();
    if (valid && step === 1) {
      setStep((prevStep) => Math.min(prevStep + 1, 2));
    }
  };

  const renderContent = () => {
    switch (step) {
      case 1:
        return <SignUpStepOne register={register} errors={errors} />;
      case 2:
        return <SignUpStepTwo />;
      default:
        return null;
    }
  };

  return (
    <div className="h-screen w-full grid place-items-center bg-gray-100">
      <div className="bg-white p-6 w-full lg:max-w-xl h-full lg:h-4/5 rounded-lg shadow-lg">
        <div>
          <h1 className="text-xl font-bold text-blue-600 text-center">
            Create a Job Seeker Account
          </h1>
          <Stepper
            styleConfig={{
              activeBgColor: "rgb(37 99 235)",
              completedBgColor: "rgb(37 99 235)",
            }}
            connectorStyleConfig={{
              activeColor: "rgb(37 99 235)",
              completedColor: "rgb(37 99 235)",
            }}
            connectorStateColors
            steps={[{ label: "Personal Data" }, { label: "Interested Job" }]}
            activeStep={step - 1}
          />
        </div>
        <form>
          <div className="flex flex-1 flex-col justify-between">
            <div className="lg:max-h-[250px] overflow-auto">
              {renderContent()}
            </div>

            <div className="grid grid-cols-[150px_1fr] gap-8 mt-4">
              <button
                disabled={step === 1}
                className="bg-black disabled:bg-black/10 py-2 w-full text-white rounded-lg"
                type="button"
                onClick={() => setStep((prevStep) => Math.max(prevStep - 1, 1))}
              >
                Previous
              </button>
              {step === 2 ? (
                <button
                  className="bg-green-600 py-2 w-full disabled:bg-green-700/10 text-white rounded-lg flex justify-center items-center"
                  type="button"
                  onClick={handleSubmit}
                  disabled={isLoading}
                >
                  {isLoading ? "Submitting..." : "Submit"}
                </button>
              ) : (
                <button
                  type="button"
                  className="bg-blue-700 py-2 w-full text-white rounded-lg"
                  onClick={handleNext}
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
