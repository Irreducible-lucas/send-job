import { ButtonProps } from "../type";

const Button = ({ name, styles, onClick }: ButtonProps) => {
  const defaultStyles =
    "bg-blue-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-700 transition mt-5";

  return (
    <button className={`${defaultStyles} ${styles || ""}`} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
