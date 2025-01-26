import SkillSelector from "./SkillSelector";

const SignUpStepThree = () => (
  <div className="flex justify-center items-center">
    <SkillSelector
      skills={[
        "Figma (software)",
        "Bootstrap",
        "Corel Draw",
        "WordPress",
        "React JS",
        "Frontend Developer",
        "Backend Developer",
        "Flutter",
        "UI/UX Designer",
      ]}
      maxSelection={5}
    />
  </div>
);

export default SignUpStepThree;
