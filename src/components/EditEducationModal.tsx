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
import { useAppSelector } from "../rtk/hooks";
import { toast } from "react-toastify";
import { FaRegEdit } from "react-icons/fa";
import { useGetMyEducationalHistoryQuery, useUpdateEducationByUserIdMutation } from "../rtk/services/education";

export default function EditEducationModal({eduId}: any) {
  const { currentUser } = useAppSelector((state) => state.auth);
  const { data } = useGetMyEducationalHistoryQuery(currentUser?.id);
  const [updateEducationByUserId, {isLoading: isUpdating}] = useUpdateEducationByUserIdMutation();
  
  const education: any = data?.data.filter((item: any) => item.id === eduId)?.[0];
  const [school, setSchool] = useState(education.school);
  const [department, setDepartment] = useState(education.department);
  const [educationalLevel, setEducationalLevel] = useState(education.educationalLevel);
  const [startDate, setStartDate] = useState(education.startDate);
  const [endDate, setEndDate] = useState(education.endDate);
  const [isStudying, setIsStudying] = useState<boolean>(education.endDate === "Present" ? true : false);

  const submitEducation = async () => {
    try {
      const data = {
        id: education?.id,
        userId: currentUser?.id,
        school: school,
        department: department,
        educationalLevel: educationalLevel,
        startDate: startDate,
        endDate: isStudying ? "Present" : endDate
      }
      await updateEducationByUserId(data);
      toast.success("Education updated successfully")
    } catch (error) {
      toast.error("Error occured while updating education")
    }
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className='bg-blue-600 hover:bg-blue-900 hover:cursor-pointer p-2 rounded-lg'>
          <FaRegEdit className='text-white' size={20} />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-center">Edit Education</DialogTitle>
          <DialogDescription className="text-center">
            Edit your information and click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="w-full flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="school"
                className="block text-sm font-medium text-gray-700"
              >
                School
              </label>
              <input
                id="school"
                type="text"
                value={school}
                onChange={(e) => setSchool(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Name of school"
              />
            </div>
            <div>
              <label
                htmlFor="dept"
                className="block text-sm font-medium text-gray-700"
              >
                Department/Major
              </label>
              <input
                id="dept"
                type="text"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Last name"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="level"
              className="block text-sm font-medium text-gray-700"
            >
              Level of Education
            </label>
            <input
              id="level"
              type="text"
              value={educationalLevel}
              onChange={(e) => setEducationalLevel(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="e.g. OND, HND, B.Sc, M.Sc or PHD"
            />
          </div>

          <div>
            <label
              htmlFor="start_date"
              className="block text-sm font-medium text-gray-700"
            >
              Start Date
            </label>
            <input
              type="date"
              id="start_date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="flex gap-2 my-4 group">
            <input type="checkbox" className="group-hover:cursor-pointer" id="studying" checked={isStudying} onChange={(e) => setIsStudying(e.target.checked)} /> <label className="group-hover:cursor-pointer" htmlFor="studying">Still Studying</label>
          </div>

          {!isStudying && (
            <div>
              <label
                htmlFor="end_date"
                className="block text-sm font-medium text-gray-700"
              >
                End Date
              </label>
              <input
                type="date"
                id="end_date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          )}

        </div>
        <DialogFooter>
          <Button onClick={submitEducation} disabled={isUpdating} className="bg-black">{isUpdating ? "saving..." : "Save changes"}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
