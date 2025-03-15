import { useAppDispatch } from "../../rtk/hooks"
import { setJobModalOpen } from "../../rtk/features/user/jobSlice"

const Header = ({title}: {title: string}) => {
    const dispatch = useAppDispatch();

    return (
        <header className='h-[70px] px-[40px] bg-white flex items-center justify-between'>
            <h2 className='text-xl font-bold'>{title}</h2>
            <button onClick={() => dispatch(setJobModalOpen(true))} className="w-full text-sm font-bold md:w-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                Post Job for Free
            </button>
        </header>
    )
}

export default Header