import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/dialog"
import { useAppSelector, useAppDispatch } from "../../rtk/hooks";
import { toast } from "react-toastify";
import { updateUserProfile } from "../../rtk/features/user/authSlice";
import { Pencil } from "lucide-react";
import { Button } from "../../../components/button";


export default function CompanyInfoModal() {
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector((state) => state.auth)
  const [isUpdating, setIsUpdating] = useState(false);
  const [companyName, setCompanyName] = useState(currentUser?.company_name);
  const [companyEmail, setCompanyEmail] = useState(currentUser?.company_email);
  const [companyAddress, setCompanyAddress] = useState(currentUser?.company_address);
  const [companyWebsite, setCompanyWebsite] = useState(currentUser?.company_website);
  const [telephone, setTelephone] = useState(currentUser?.company_contact_number);
  const [overview, setOverview] = useState(currentUser?.company_overview);


  const submitAboutCompany = async () => {
    try {
      const formData = new FormData();
      formData.append("id", currentUser?.id);
      formData.append("company_name", companyName);
      formData.append("company_email", companyEmail);
      formData.append("company_address", companyAddress);
      formData.append("company_website", companyWebsite);
      formData.append("company_contact_number", telephone);
      formData.append("company_overview", overview);
      setIsUpdating(true);
      await dispatch(updateUserProfile(formData)).unwrap();
      setIsUpdating(false);
      toast.success("Company info updated successfully")
    } catch (error) {
      toast.error("Error occured while uploading company information")
    }
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-sm text-blue-600 hover:bg-blue-600 hover:text-blue-100 bg-blue-100 px-4 py-2 rounded-lg flex justify-center items-center gap-x-3"><Pencil size={16} /><span>Edit</span></Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-center">Edit Company information</DialogTitle>
          <DialogDescription className="text-center">
            Edit your company information. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="w-full flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-gray-700"
              >
                Company Name
              </label>
              <input
                id="companyName"
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Company name"
              />
            </div>
            <div>
              <label
                htmlFor="companyEmail"
                className="block text-sm font-medium text-gray-700"
              >
                Company Email
              </label>
              <input
                id="companyEmail"
                type="text"
                value={companyEmail}
                onChange={(e) => setCompanyEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Company Email"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="companyWebsite"
                className="block text-sm font-medium text-gray-700"
              >
                Company Website
              </label>
              <input
                id="companyWebsite"
                type="text"
                value={companyWebsite}
                onChange={(e) => setCompanyWebsite(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Company Website"
              />
            </div>
            <div>
              <label
                htmlFor="telephone"
                className="block text-sm font-medium text-gray-700"
              >
                Company Contact Number
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
          </div>
          <div>
            <label
              htmlFor="companyAddress"
              className="block text-sm font-medium text-gray-700"
            >
              Company Address
            </label>
            <textarea
              id="companyAddress"
              rows={2}
              value={companyAddress}
              onChange={(e) => setCompanyAddress(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Company Website"
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="companyOverview"
              className="block text-sm font-medium text-gray-700"
            >
              Company Overview
            </label>
            <textarea
              id="companyOverview"
              rows={3}
              value={overview}
              onChange={(e) => setOverview(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Company Overview"
            ></textarea>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={submitAboutCompany} disabled={isUpdating} className="bg-black">{isUpdating ? "saving..." : "Save changes"}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
