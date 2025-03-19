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
import { FaPlus, FaRegEdit } from "react-icons/fa";
import { useGetMyWorkHistoryQuery, useUpdateWorkByUserIdMutation } from "../rtk/services/work";
import { MdDelete } from "react-icons/md";

export default function EditWorkModal({ workId }: any) {
  const { currentUser }: any = useAppSelector((state) => state.auth);
  const { data } = useGetMyWorkHistoryQuery(currentUser?.id);
  const [updateWorkByUserId, { isLoading: isUpdating }] = useUpdateWorkByUserIdMutation();

  const work: any = data?.data.filter((item: any) => item.id === workId)?.[0];
  const [companyName, setCompanyName] = useState(work?.companyName);
  const [jobTitle, setJobTitle] = useState(work?.jobTitle);
  const [responsiblities, setResponsibilities] = useState(JSON.parse(work?.jobDescription));
  const [startDate, setStartDate] = useState(work?.startDate);
  const [endDate, setEndDate] = useState(work?.endDate);
  const [stillWorking, setStillWorking] = useState<boolean>(work?.stillWorking);

  const addResponsibility = () => {
    setResponsibilities((prev: any) => [
      ...prev,
      { id: prev.length + 1, text: "" },
    ]);
  };

  const deleteResponsibility = (id: any) => {
    if (responsiblities.length < 2) {
      toast.warning("You must of have atleast one job responsibility");
      return;
    }
    setResponsibilities((prev: any) => prev.filter((item: any) => item.id !== id));
  }


  const submitWork = async () => {
    try {
      const data = {
        id: work?.id,
        userId: currentUser?.id,
        companyName: companyName,
        jobTitle: jobTitle,
        jobDescription: JSON.stringify(responsiblities),
        startDate: startDate,
        endDate: stillWorking ? "Present" : endDate,
        stillWorking: stillWorking
      }

      await updateWorkByUserId(data);
      toast.success("Work experience updated successfully");
    } catch (error) {
      toast.error("Error occured while updating work experience")
    }
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='flex gap-1 items-center rounded-lg px-4 py-2 bg-blue-600 text-white hover:bg-blue-800 hover: cursor-pointer'>
          <FaRegEdit className='text-white' size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-center">Edit Work</DialogTitle>
          <DialogDescription className="text-center">
            Enter the necessary information and click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="w-full flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700"
              >
                Company
              </label>
              <input
                id="company"
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Name of Company"
                required
              />
            </div>
            <div>
              <label
                htmlFor="jobTitle"
                className="block text-sm font-medium text-gray-700"
              >
                Job Title
              </label>
              <input
                id="jobTitle"
                type="text"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Job Title"
                required
              />
            </div>
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
              required
            />
          </div>

          <div className="flex gap-2 my-4 group">
            <input type="checkbox" className="group-hover:cursor-pointer" id="stillWorking" checked={stillWorking} onChange={(e) => setStillWorking(e.target.checked)} /> <label className="group-hover:cursor-pointer" htmlFor="stillWorking">Still Working?</label>
          </div>

          {!stillWorking && (
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

          <div>
            <label
              htmlFor="level"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Responsibilities
            </label>
            {responsiblities?.map((responsiblity: any) => (<div className="flex items-center gap-4"><input
              id="level"
              type="text"
              key={responsiblity?.id}
              value={responsiblity?.text}
              onChange={(e) => setResponsibilities((prev: any) => prev.map((item: any) => item.id === responsiblity.id ? { ...item, text: e.target.value } : item))}
              className="mt-1 block w-full px-4 py-2 mb-2 border rounded-md shadow-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="e.g. OND, HND, B.Sc, M.Sc or PHD"
            />
              <button onClick={() => deleteResponsibility(responsiblity?.id)} className="bg-red-600 hover:bg-red-800 p-2 rounded-lg"><MdDelete size={20} className="text-white" /></button>
            </div>))}

            <button
              onClick={addResponsibility}
              className="bg-blue-600 rounded-lg px-4 py-2 flex items-center gap-2 text-white mt-2"
            >
              <FaPlus size={20} className="text-white" /> Add more
            </button>
          </div>

        </div>
        <DialogFooter>
          <Button onClick={submitWork} disabled={isUpdating} className="bg-black">{isUpdating ? "saving..." : "Save changes"}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
