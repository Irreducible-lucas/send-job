import { AddWorkModal, DeleteDialog, EditWorkModal } from '../components'
import { useAppSelector } from '../rtk/hooks'
import moment from 'moment';
import { useDeleteWorkByIdMutation, useGetMyWorkHistoryQuery } from '../rtk/services/work';

const WorkExperienceHistory = () => {
    const { currentUser } = useAppSelector((state) => state.auth);
    const { data, isLoading } = useGetMyWorkHistoryQuery(currentUser?.id);
    const [deleteWork, { isLoading: isDeleting }] = useDeleteWorkByIdMutation();

    if (isLoading) {
        return (
            <div className='p-8'>Loading data....</div>
        )
    }

    const deleteWorkById = async (id: any) => {
        await deleteWork(id);
    }

    return (
        <div>
            <div className='flex justify-between'>
                <h1 className="text-lg font-bold text-black">
                    Work History
                </h1>
                <AddWorkModal />
            </div>
            <hr className="my-4" />
            {
                data?.data.length === 0 ? (
                    <div className='bg-blue-50 text-blue-600 p-8 m-16 text-center rounded-lg'>
                        No work history found
                    </div>
                ) : data?.data.map((work: any) => (
                    <div key={work.id} className='p-4 mx-4 bg-gray-100 rounded-lg mb-4'>
                        <h2 className='font-bold'>{work.companyName}</h2>
                        <div className='flex justify-between font-semibold text-gray-600'>
                            <h3>{work.jobTitle}</h3>
                            <h3>{moment(work.startDate).format("YYYY")} - {work.endDate === "Present" ? "Present" : moment(work.endDate).format("YYYY")}</h3>
                        </div>
                        <div className='flex items-end mt-4 gap-4 text-gray-500'>
                            <ul className='flex-1 ml-4'>
                                {JSON.parse(work.jobDescription).map((responsibility: any) => (
                                    <li key={responsibility.id}>
                                       {"- "} {responsibility.text}
                                    </li>
                                ))}
                            </ul>
                            <div className='flex gap-4'>
                                <EditWorkModal workId={work.id} />
                                <DeleteDialog handleDelete={() => deleteWorkById(work.id)} isDeleting={isDeleting} />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default WorkExperienceHistory;