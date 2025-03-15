import { companyApplicants } from "../../constant"
import { useAppDispatch } from "../../rtk/hooks"
import { setIsViewingApplicantProfile, setApplicantInfo } from "../../rtk/features/user/jobSlice"

const ApplicantsListTab = () => {
    const dispatch = useAppDispatch();

    const viewApplicantProfile = (info: any) => {
        dispatch(setIsViewingApplicantProfile(true));
        dispatch(setApplicantInfo(info));
    }
    return (
        <div className="h-[150px] overflow-y-auto pb-4">
            {companyApplicants.map((applicant, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow mt-4">
                    <div className="flex items-center gap-4">
                        <img
                            src={applicant.imageUrl}
                            alt={applicant.name}
                            className="w-12 h-12 rounded-full"
                        />
                        <div>
                            <h3 className="font-bold">{applicant.name}</h3>
                            <p className="text-gray-500 text-sm">{applicant.role}</p>
                            <p className="text-gray-400 text-sm">
                                {applicant.location}
                            </p>
                            <p className="text-gray-400 text-xs">
                                {applicant.appliedDate}
                            </p>
                        </div>
                        {applicant.status && (
                            <span className="ml-auto px-3 py-1 text-sm bg-blue-500 text-white rounded-full">
                                Status: {applicant.status}
                            </span>
                        )}
                    </div>
                    <button onClick={() => viewApplicantProfile(applicant)} className="mt-3 w-full border border-blue-500 text-blue-500 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition">
                        View Profile
                    </button>
                </div>
            ))}
        </div>
    )
}

export default ApplicantsListTab