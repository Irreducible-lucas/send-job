import LocationSelector from "./LocationSelector";

interface StepProps {
  errors: any;
  setValue: any;
}

const SignUpStepFour = ({ errors, setValue }: StepProps) => (
  <div>
    <LocationSelector setInterestedLocation={setValue} />
  </div>
);

export default SignUpStepFour;
