import { useEffect, useState } from "react";
import EmployeeJobCard from "./EmployeeJobCard"
import { useGetMyApplicationsQuery } from "../rtk/services/application";

const EmployeeProcessJobs = ({ userId }: any) => {
    const {data: jobs, isLoading} = useGetMyApplicationsQuery(userId);
    const [filteredJobs, setFilteredJobs] = useState<any>([]);

    useEffect(() => {
        const JOBS = jobs?.data.filter((job: any) => job?.status === "processing" || job?.status === "interview" ) 
        setFilteredJobs(JOBS);
    }, [isLoading])
    
        if (isLoading) {
            return (<div className="p-8">Loading applied jobs...</div>)
        }
        return (
            <div className="p-4">
                {filteredJobs?.length === 0 ? (<div>No Jobs applied to yet</div>) : (
                    <div className="grid grid-cols-2 gap-4">
                        {filteredJobs?.map((job: any, index: number) => (<EmployeeJobCard key={index} job={job} saved={true}/>))}
                    </div>
                )}
            </div>
        )
}

export default EmployeeProcessJobs