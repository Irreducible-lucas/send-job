import { useNavigate } from "react-router-dom";
import styles from "../styles";

const Unauthorised = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen items-center flex justify-center ">
      <div className="flex flex-col items-center w-full gap-y-5">
        <h1 className={`${styles.heading1}`}>403 - Not Authorized</h1>
        <h3 className={`${styles.paragraph}`}>Ooops 😥!!</h3>
        <p>You dont have access to the page you are looking for</p>
        <button
          onClick={() => navigate("/")}
          className="py-2 px-4 bg-[#523cdb] rounded-md text-white mt-2"
        >
          Go to home
        </button>
      </div>
    </div>
  );
};

export default Unauthorised;
