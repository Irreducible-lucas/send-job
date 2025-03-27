import { MdDelete } from "react-icons/md"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "../../components/alert-dialog"
import { Button } from "../../components/button"

export default function DeleteDialog({handleDelete, isDeleting}: any) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className='bg-red-600 hover:bg-red-900 hover:cursor-pointer p-2 rounded-lg'>
                    <MdDelete className='text-white' size={20} /> Delete
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete this data from the database.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete} disabled={isDeleting} className="bg-red-600 hover:bg-red-800 text-white">{isDeleting ? "deleting" : "Continue"}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
