import React from "react";
import TestCard from "./employer/TestCard";
import { useGetTestbyJobIdQuery } from "../rtk/services/jobs";

interface Step3Props {
  jobId: any,
}

const EditJobStepThree: React.FC<Step3Props> = ({ jobId
}) => {

  const { data: quiz, isLoading } = useGetTestbyJobIdQuery(jobId);

  if (isLoading) {
    return (<div className="p-8 grid place-content-center text-center">Loading questions...</div>)
  }

  return (
    <div className="flex-grow overflow-auto p-4 max-h-[60vh]  bg-white">
      <div className="mb-4 text-center">
        <h3 className=" font-semibold">Update screening questions</h3>
        <p className="text-gray-500 text-sm">Each question test Applicants knowledge of the job.</p>
      </div>
      {quiz?.data.map((test: any, index: any) => <TestCard test={test} index={index} key={index} total={quiz?.data.length} />)}
    </div>
  );
};

export default EditJobStepThree;
