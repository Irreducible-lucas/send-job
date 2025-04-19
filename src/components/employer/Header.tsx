import { useAppDispatch, useAppSelector } from "../../rtk/hooks";
import { setJobModalOpen } from "../../rtk/features/user/jobSlice";
import { useNavigate } from "react-router-dom";

const Header = ({ title }: { title: string }) => {
  const dispatch = useAppDispatch();
  const { currentUser }: any = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  return (
    <header className="h-[70px] px-[40px] bg-white flex items-center justify-between">
      <h2 className="text-xl font-bold">{title}</h2>
      <button
        onClick={() => {
          if (currentUser.role === "company") dispatch(setJobModalOpen(true));
          else navigate("/jobs");
        }}
        className="w-full text-sm font-bold md:w-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        {currentUser.role === "company" ? "Post Job" : "Vacancies"}
      </button>
    </header>
  );
};

export default Header;
