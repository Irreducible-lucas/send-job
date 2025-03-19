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


export default function ProfileInfoModal() {
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector((state) => state.auth)
  const [isUpdating, setIsUpdating] = useState(false);
  const name = currentUser?.name.split(" ");
  const [firstname, setFirstname] = useState(name[0]);
  const [lastname, setLastname] = useState(name[1]);
  const [telephone, setTelephone] = useState(currentUser?.telephone);
  const [birthDate, setBirthDate] = useState(currentUser?.birthDate);
  const [gender, setGender] = useState(currentUser?.gender);


  const submitAboutMe = async () => {
    try {
      const formData = new FormData();
      const name = firstname + " " + lastname;
      formData.append("id", currentUser?.id);
      formData.append("name", name);
      formData.append("telephone", telephone);
      formData.append("birthDate", birthDate);
      formData.append("gender", gender);
      setIsUpdating(true);
      await dispatch(updateUserProfile(formData)).unwrap();
      setIsUpdating(false);
      toast.success("Profile info updated successfully")
    } catch (error) {
      toast.error("Error occured while uploading profile information")
    }
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-sm text-blue-600 hover:bg-blue-600 hover:text-blue-100 bg-blue-100 px-4 py-2 rounded-lg flex justify-center items-center gap-x-3"><Pencil size={16} /><span>Edit</span></Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-center">Edit Personal information</DialogTitle>
          <DialogDescription className="text-center">
            Edit your personal information. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="w-full flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstname"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                id="firstname"
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="First name"
              />
            </div>
            <div>
              <label
                htmlFor="lastname"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                id="lastname"
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Last name"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="telephone"
              className="block text-sm font-medium text-gray-700"
            >
              Telephone
            </label>
            <input
              type="tel"
              id="telephone"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="+2349011122233"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="birth_date"
                className="block text-sm font-medium text-gray-700"
              >
                Birth Date
              </label>
              <input
                type="date"
                id="birth_date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700"
              >
                Gender
              </label>
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={submitAboutMe} disabled={isUpdating} className="bg-black">{isUpdating ? "saving..." : "Save changes"}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
