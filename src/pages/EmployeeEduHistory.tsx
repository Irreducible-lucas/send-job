import { AddEducationModal, DeleteDialog } from '../components'
import { useGetMyEducationalHistoryQuery, useDeleteEducationByIdMutation } from '../rtk/services/education'
import { useAppSelector } from '../rtk/hooks'
import {EditEducationModal} from "../components"
import moment from 'moment';

const EmployeeEduHistory = () => {
    const { currentUser } = useAppSelector((state) => state.auth);
    const { data, isLoading } = useGetMyEducationalHistoryQuery(currentUser?.id);
    const [deleteEducation, {isLoading: isDeleting}] = useDeleteEducationByIdMutation();

    if (isLoading) {
        return (
            <div className='p-8'>Loading data....</div>
        )
    }

    const deleteEducationById = async(id: any) => {
        await deleteEducation(id);
    }

    return (
        <div>
            <div className='flex justify-between'>
                <h1 className="text-lg font-bold text-black">
                    Educational History
                </h1>
                <AddEducationModal />
            </div>
            <hr className="my-4" />
            {
                data?.data.length === 0 ? (
                    <div className='bg-blue-50 text-blue-600 p-8 m-16 text-center rounded-lg'>
                        No educational history found
                    </div>
                ) : data?.data.map((education: any) => (
                    <div key={education.id} className='p-4 mx-4 bg-gray-100 rounded-lg mb-4'>
                        <div className='flex justify-between font-bold'>
                            <h2>{education.school}</h2>
                            <h3>{moment(education.startDate).format("YYYY")} - {education.endDate === "Present" ? "Present" : moment(education.endDate).format("YYYY")}</h3>
                        </div>
                        <div className='flex justify-between font-bold mt-4'>
                            <p>{education.educationalLevel} - {education.department}</p>
                            <div className='flex gap-4'>
                                <EditEducationModal eduId={education.id} />
                                <DeleteDialog handleDelete={() => deleteEducationById(education.id)} isDeleting={isDeleting}/>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default EmployeeEduHistory