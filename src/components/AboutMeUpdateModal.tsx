import { useState } from "react";
import { Button } from "../../components/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/dialog"
import { useAppSelector, useAppDispatch } from "../rtk/hooks";
import { toast } from "react-toastify";
import { updateUserProfile } from "../rtk/features/user/authSlice";
import { Pencil } from "lucide-react";


export default function AboutMeUpdateModal() {
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector((state) => state.auth)
  const [isUpdating, setIsUpdating] = useState(false);
  const [aboutMe, setAboutMe] = useState(currentUser?.about_me);

  const submitAboutMe = async () => {
    try {
      const formData = new FormData();
      formData.append("about_me", aboutMe);
      formData.append("id", currentUser?.id);
      setIsUpdating(true);
      await dispatch(updateUserProfile(formData)).unwrap();
      setIsUpdating(false);
      toast.success("about me updated successfully")
    } catch (error) {
      toast.error("Error occured while uploading profile picture")
    }
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-sm text-blue-600 hover:bg-blue-600 hover:text-blue-100 bg-blue-100 px-4 py-2 rounded-lg flex justify-center items-center gap-x-3"><Pencil size={16} /><span>Edit</span></Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-center">Edit About Me information</DialogTitle>
          <DialogDescription className="text-center">
            Edit about me information. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div>
        <textarea
            id="jobDescription"
            value={aboutMe}
            onChange={(e) => setAboutMe(e.target.value)}
            placeholder="Enter about me "
            className="w-full mt-1 h-[200px] p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
          ></textarea>
        </div>
        <DialogFooter>
          <Button onClick={submitAboutMe} disabled={isUpdating} className="bg-black">{isUpdating ? "saving..." : "Save changes"}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
