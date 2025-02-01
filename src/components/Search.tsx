import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      const query = e.target.value;
      if (location.pathname === "/jobs") {
        setSearchParams({
          ...Object.fromEntries(searchParams),
          search: query,
        });
      } else {
        navigate(`/jobs?search=${query}`);
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Job Title"
        className="w-full outline-0 p-2 text-gray-600 px-4"
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};

export default Search;
