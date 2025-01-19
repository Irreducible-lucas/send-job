import styles, { layout } from "../styles";
import { SelectInput, JobCard } from ".";
import { GeneralList, Job } from "../type";
import { useState } from "react";

type Props = {
  jobClassifications: GeneralList[];
  regions: GeneralList[];
  jobs: Job[];
};

const SearchJobs = ({ jobClassifications, jobs, regions }: Props) => {
  const [selectedClassification, setSelectedClassification] =
    useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [filter, setFilter] = useState<string>("");

 

  return (
    <section className={`bg-white ${layout.section}`}>
      <section className="grid grid-cols-1 lg:grid-cols-[1fr_150px] gap-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <input
              onChange={(e: any) => {
                setFilter(e.target.value);
              }}
              id="search"
              type="text"
              placeholder="Search here..."
              className="w-full h-[50px] px-4 focus:outline-secondary border border-lightgrey rounded-lg"
            />
            <label
              htmlFor="search"
              className="absolute top-1/2 -translate-y-[50%] -translate-x-2 right-0"
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.35 20.925L13.325 14.9C12.825 15.3333 12.2417 15.6708 11.575 15.9125C10.9083 16.1541 10.2 16.275 9.45 16.275C7.65 16.275 6.125 15.65 4.875 14.4C3.625 13.15 3 11.6416 3 9.87498C3 8.10831 3.625 6.59998 4.875 5.34998C6.125 4.09998 7.64167 3.47498 9.425 3.47498C11.1917 3.47498 12.6958 4.09998 13.9375 5.34998C15.1792 6.59998 15.8 8.10831 15.8 9.87498C15.8 10.5916 15.6833 11.2833 15.45 11.95C15.2167 12.6166 14.8667 13.2416 14.4 13.825L20.475 19.85C20.625 19.9833 20.7 20.1541 20.7 20.3625C20.7 20.5708 20.6167 20.7583 20.45 20.925C20.3 21.075 20.1167 21.15 19.9 21.15C19.6833 21.15 19.5 21.075 19.35 20.925ZM9.425 14.775C10.775 14.775 11.925 14.2958 12.875 13.3375C13.825 12.3791 14.3 11.225 14.3 9.87498C14.3 8.52498 13.825 7.37081 12.875 6.41248C11.925 5.45414 10.775 4.97498 9.425 4.97498C8.05833 4.97498 6.89583 5.45414 5.9375 6.41248C4.97917 7.37081 4.5 8.52498 4.5 9.87498C4.5 11.225 4.97917 12.3791 5.9375 13.3375C6.89583 14.2958 8.05833 14.775 9.425 14.775Z"
                  fill="#849299"
                />
              </svg>
            </label>
          </div>
          <div className="h-[50px]">
            <SelectInput
              setSelectedValue={setSelectedClassification}
              data={jobClassifications}
              title="Select Job Classification"
            />
          </div>
          <div className="h-[50px]">
          <input
              onChange={(e: any) => {
                setFilter(e.target.value);
              }}
              id="search"
              type="text"
              placeholder="location"
              className="w-full h-[50px] px-4 focus:outline-secondary border border-lightgrey rounded-lg"
            />
          </div>
        </div>
        <div className="h-[50px]">
          <button className="w-full h-full bg-blue-500 text-white rounded-sm">
            Search Jobs
          </button>
        </div>
      </section>

    
    </section>
  );
};

export default SearchJobs;
