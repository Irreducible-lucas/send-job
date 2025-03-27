import { FaCalendarCheck } from "react-icons/fa"
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
import { useUpdateApplicationMutation } from "../rtk/services/application"
import { Button } from "../../components/button"
import { useAppSelector } from "../rtk/hooks"
import { toast } from "react-toastify"

export default function SendInterviewDialog() {
    const { applicantInfo } = useAppSelector((state) => state.job);

    const [updateApplication, { isLoading }] = useUpdateApplicationMutation();


    const updateAppStatus = async () => {
        const update = {
            status: "interview"
        }
        await updateApplication({ appId: applicantInfo?.id, update: update });
        toast.success("Interview invitation sent")
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button disabled={isLoading} className="w-full disabled:bg-blue-800 bg-blue-600 text-white flex items-center gap-2 hover:bg-blue-700"><FaCalendarCheck className="text-lg" />
                {isLoading ? "sending..." : "Send Interview Invitation"}
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action will send an interview invitation to the employee.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction disabled={isLoading} onClick={updateAppStatus}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
