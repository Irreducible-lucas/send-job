import { useGetSavedJobsQuery } from "../rtk/services/jobs";
import EmployeeJobCard from "./EmployeeJobCard"

const EmployeeSavedJobs = ({ userId }: any) => {
    const {data: jobs, isLoading} = useGetSavedJobsQuery(userId);

    if (isLoading) {
        return (<div className="p-8">Loading saved jobs...</div>)
    }
    return (
        <div className="p-4">
            {jobs?.data.length === 0 ? (<div>No saved Jobs yet</div>) : (
                <div className="grid grid-cols-2 gap-4">
                    {jobs?.data.map((job: any, index: number) => (<EmployeeJobCard key={index} job={job} saved={true}/>))}
                </div>
            )}
        </div>
    )
}

export default EmployeeSavedJobs