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
import ProfileImageUpload from "./ProfileImageUpload"
import { useAppSelector, useAppDispatch } from "../rtk/hooks";
import { toast } from "react-toastify";
import { updateUserProfile } from "../rtk/features/user/authSlice";

// Define interface for the image object
interface ProfileImage {
  src: string;
  name: string;
  size: number;
  file?: any; // Store the original file for upload
}

export default function CompanyImageUploadModal() {
  const dispatch = useAppDispatch();
  const [image, setImage] = useState<ProfileImage | null>(null);
  const { currentUser } = useAppSelector((state) => state.auth)
  const [isUpdating, setIsUpdating] = useState(false);

  const submitImage = async () => {
    try {
      const formData = new FormData();
      formData.append("logo", image?.file);
      formData.append("id", currentUser?.id);
      setIsUpdating(true);
      await dispatch(updateUserProfile(formData)).unwrap();
      setIsUpdating(false);
      toast.success("Company logo updated successfully")
    } catch (error) {
      setIsUpdating(false);
      toast.error("Error occured while uploading company logo")
    }
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-700 hover:bg-blue-900 text-white">Upload new logo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">Change Company Logo</DialogTitle>
          <DialogDescription className="text-center">
            Change your company logo here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <ProfileImageUpload image={image} setImage={setImage} />
        <DialogFooter>
          <Button onClick={submitImage} disabled={isUpdating} className="bg-black">{isUpdating ? "saving..." : "Save changes"}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
