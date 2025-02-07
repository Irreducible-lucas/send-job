import { useState, FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { EmpFormInput, GenderEnum } from "../type";
import { Stepper } from "react-form-stepper";
import axios from "../axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Logo } from "../assets";
import EmpSignUpStepOne from "../components/EmpSignUpStepOne";
import { DevTool } from '@hookform/devtools'
import EmpSignUpStepTwo from "../components/EmpSignUpStepTwo";

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
  job_title: yup.string().required("Job Title is required"),
  gender: yup
    .mixed<GenderEnum>()
    .oneOf(Object.values(GenderEnum))
    .required("Gender is required"),
  company_name: yup.string().required("Company name is required"),
  company_address: yup.string().required("Company address is required"),
  company_email: yup.string().required("Company email is required"),
  company_website: yup.string().required("Company website is required"),
  company_contact_number: yup.string().required("Company contact number is required"),
  company_overview: yup.string().required("About company information is required"),
});

const EmployerSignUp: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    trigger,
    getValues,
    control,
    formState: { errors },
  } = useForm<EmpFormInput>({ resolver: yupResolver(schema) });

  const [step, setStep] = useState<number>(1);

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
          "job_title",
        ]);
        break;
      case 2:
        valid = await trigger([
          "company_name",
          "company_address",
          "company_email",
          "company_website",
          "company_contact_number",
          "company_overview",
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

  const handleSubmit = async () => {
    const valid = await validateStep();
    if (valid) {
      const data = getValues();
  
      const body = {
        profile_image_url: "https://avatars.githubusercontent.com/u/32225588",
        full_name: `${data.firstname} ${data.lastname}`,
        email: data.email,
        password: data.password,
        job_title: data.job_title,
        gender: data.gender,
        telephone_number: data.telephone,
        company_name: data.company_name,
        company_address: data.company_address,
        company_email: data.company_email,
        company_website: data.company_website,
        company_contact_number: data.company_contact_number,
        company_overview: data.company_overview,
        company_logo_url: "",
      };

      try {
        setIsLoading(true);
        const { data }: any = await axios.post("/companies/create", body);
        setIsLoading(false);
        toast.success(data.message, {
          position: "top-center",
          theme: "colored",
        });
        navigate("/login");
      } catch (error: any) {
        setIsLoading(false);
        toast.error(error.response.data.message, {
          position: "top-center",
          theme: "colored",
        });
        console.log("Error occured:", error.response.data.message);
      }
    }
  };

  const renderContent = () => {
    switch (step) {
      case 1:
        return <EmpSignUpStepOne control={control} register={register} errors={errors} />;
      case 2:
        return <EmpSignUpStepTwo control={control} register={register} errors={errors} />;
      default:
        return null;
    }
  };

  return (
    <div className="h-screen w-full grid place-items-center bg-[url('/src/assets/signup-bg.jpg')] overflow-y-auto">
      <div className="bg-white p-6 w-full lg:max-w-xl rounded-lg shadow-lg my-10">
        <img
          src={Logo}
          className="w-[50px] h-[50px] mx-auto my-4"
          alt="Our Logo"
        />
        <div>
          <h1 className="text-xl font-bold text-blue-600 text-center">
            Create an Employer Account
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
            steps={[{ label: "Personal Info" }, { label: "Company Info" }]}
            activeStep={step - 1}
          />
        </div>
        <form>
          <div className="flex flex-1 flex-col justify-between">
            <div>{renderContent()}</div>

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
                  className="bg-green-600 py-2 w-full disabled:bg-green-700/30 text-white rounded-lg flex justify-center items-center"
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
        <p className="text-center mt-8">
          {" "}
          <span className="mr-2">Have an Account?</span>
          <a className="font-bold text-blue-700 hover:underline" href="/login">
            Login
          </a>
        </p>
      </div>
      <DevTool control={control} />
    </div>
  );
};

export default EmployerSignUp;
