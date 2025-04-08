import { FaUser } from 'react-icons/fa';
import { CompanyProfileEdit, EmployerProfileEdit } from '../../components';
import { MdWork } from 'react-icons/md';
import { useState } from 'react';

const Dashboard = () => {
    const [selected, setSelected] = useState({
            id: 1,
            name: "Personal Information",
        });
    
        const profile = [
            {
                id: 1,
                icon: <FaUser size={20} className='text-gray-600' />,
                name: "Personal Information",
            },
            {
                id: 2,
                icon: <MdWork size={20} className='text-gray-600' />,
                name: "Company Information",
            },
        ]
    
        const INFO: any = {
            "Personal Information": <EmployerProfileEdit/>,
            "Company Information": <CompanyProfileEdit/>
        }
    return (
        <div className={"grid grid-rows-[70px_500px] pb-6"}>
            <header className='h-[70px] px-[40px] bg-white flex items-center border-b-2 border-gray-300'>
                <h2 className='text-xl font-bold'>My Profile</h2>
            </header>
            <div className='p-4 grid grid-cols-[300px_1fr] gap-4 h-full'>
                <div className='flex flex-col gap-4 items-start bg-white p-4 rounded-lg'>
                    {profile.map((data) => <button onClick={() => setSelected(data)} key={data.id} className={`hover:text-blue-700 hover:bg-blue-100 px-4 py-2 rounded-lg flex gap-2 items-center ${selected.id === data.id ? "bg-blue-100 text-blue-700 font-bold" : "text-gray-500"}`}>{data.icon}{data.name}</button>)}
                </div>
                <div className='bg-white p-4 rounded-lg '>
                    {INFO[selected.name]}
                </div>
            </div>
        </div>
    )
}

export default Dashboard