import { EmployeeJobCard } from '../components';
import { FaBriefcase, FaBookmark } from "react-icons/fa6";
import { useAppSelector } from '../rtk/hooks';
import { useGetMyApplicationsQuery } from '../rtk/services/application';
import { useGetSavedJobsQuery } from '../rtk/services/jobs';
import { useState } from 'react';
import ProfileEdit from '../components/ProfileEdit';

const Dashboard = () => {
    const { currentUser }: any = useAppSelector((state) => state.auth);
    const [selected, setSelected] = useState({
        id: 1,
        name: "Personal Information",
    });

    const profile = [
        {
            id: 1,
            name: "Personal Information",
        },
        {
            id: 2,
            name: "Education",
        },
        {
            id: 3,
            name: "Work Experience",
        },
    ]

    const INFO: any = {
        "Personal Information": <ProfileEdit />,
        "Education": <div>Education</div>,
        "Work Experience": <div>Work Experience</div>
    }

    return (
        <div className={"grid grid-rows-[70px_500px] pb-6"}>
            <header className='h-[70px] px-[40px] bg-white flex items-center border-b-2 border-gray-300'>
                <h2 className='text-xl font-bold'>My Profle</h2>
            </header>
            <div className='p-4 grid grid-cols-[300px_1fr] gap-4 h-full'>
                <div className='flex flex-col gap-4 items-start bg-white p-4 rounded-lg'>
                    {profile.map((data) => <button onClick={() => setSelected(data)} key={data.id} className={`hover:text-blue-700 hover:bg-blue-100 px-4 py-2 rounded-lg ${selected.id === data.id ? "bg-blue-100 text-blue-700 font-bold" : "text-gray-500"}`}>{data.name}</button>)}
                </div>
                <div className='bg-white p-4 rounded-lg'>
                    {INFO[selected.name]}
                </div>
            </div>
        </div>
    )
}

export default Dashboard