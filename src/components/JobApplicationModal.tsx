import React, { useState } from "react";
import { useAppSelector } from "../rtk/hooks";
import { toast } from "react-toastify";
import Axios from "../axios";
import { FaRegCircleCheck } from "react-icons/fa6";
import { useApplyForJobMutation } from "../rtk/services/application";
import { useAppDispatch } from "../rtk/hooks";
import { setJobAppModalOpen } from "../rtk/features/user/jobSlice";

interface JobApplicationModalProps {
  onClose: () => void;
}

const JobApplicationModal: React.FC<JobApplicationModalProps> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const { jobInfo } = useAppSelector((state) => state.job);
  const { currentUser }: any = useAppSelector((state) => state.auth);
  const [files, setFiles] = useState<any>([]);
  const [currentCategory, setCurrentCategory] = useState<string>('');
  const [step, setStep] = useState(1);
  const [applyForJob, { isLoading }] = useApplyForJobMutation();
  const [isDocumentUploading, setIsDocumentUploading] = useState(false);

  // Available file categories
  const categories = [
    'CV',
    'Cover Letter',
    'Portfolio',
    'Reference Letter',
    'Certificate',
    'Other'
  ];

  // Handle file selection
  const handleFileChange = (e: any) => {
    const newFiles = Array.from(e.target.files).map(file => ({
      file,
      id: Math.random().toString(36).substring(2),
      category: currentCategory || 'Other'
    }));

    setFiles([...files, ...newFiles]);
    setCurrentCategory("");
  };

  // Handle category change
  const handleCategoryChange = (e: any) => {
    setCurrentCategory(e.target.value);
  };

  // Handle file removal
  const removeFile = (id: any) => {
    setFiles(files.filter((file: any) => file.id !== id));
  };

  // Handle category update for a specific file
  const updateFileCategory = (id: any, category: any) => {
    setFiles(files.map((file: any) =>
      file.id === id ? { ...file, category } : file
    ));
  };

  // Submit files to backend
  const handleUpload = async () => {
    if (files.length === 0) {
      toast.error('Please select at least one file to upload.');
      return;
    }

    try {
      // Create FormData object to send files
      const formData = new FormData();

      // add job Id
      formData.append("jobId", jobInfo?.id);
      //add user id
      formData.append("userId", currentUser?.id);

      // Add each file to FormData with its category
      files.forEach((fileObj: { file: string | Blob; category: string | Blob; }) => {
        // Append file with a name that includes the category
        formData.append('documents', fileObj.file);
        formData.append('categories', fileObj.category);
      });
      setIsDocumentUploading(true);
      await Axios.post("/documents", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      setIsDocumentUploading(false);
      toast.success("Document uploaded successfully")

      // Clear files after successful upload
      setFiles([]);

    } catch (err) {
      toast.error("Sorry, error occured while uploading")
    } finally {
      handleNext();
    }
  };



  const handleNext = () => {
    setStep(step + 1);
  };

  const handleSubmit = async () => {
    await applyForJob({
      userId: currentUser?.id,
      jobId: jobInfo?.id,
      status: "processing"
    })
    dispatch(setJobAppModalOpen(false));
    toast.success("Job application successful.")
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 w-[90%] lg:w-[50%] rounded-2xl shadow-lg relative">
        <div className="flex justify-end items-center mb-4">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {step === 1 && (
          <div>
            <h2 className="text-xl font-bold mb-2 text-center text-blue-700">Upload Documents</h2>
            <p className="text-sm text-gray-600 text-center mb-8">Upload one or more documents and categorize them.</p>

            {/* Upload controls */}
            <div className="mb-6 p-4 border border-dashed border-gray-300 rounded-lg bg-gray-50">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select document type:
                </label>
                <select
                  value={currentCategory}
                  onChange={handleCategoryChange}
                  className="w-full p-2 border px-4 border-gray-300 hover:cursor-pointer rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="">Select a document type</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div className="flex justify-between items-center">
                <label className="inline-block px-4 py-2 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700 transition">
                  Select Files
                  <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                    accept="application/pdf"
                  />
                </label>
              </div>
              <div className="mt-2 text-xs text-gray-500">
                Only PDF files are accepted.
              </div>
            </div>

            {/* File list */}
            {files.length > 0 && (
              <div>
                <h3 className="font-semibold mb-2">Uploaded Documents ({files.length})</h3>
                <div className="overflow-y-auto max-h-64 border rounded">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">File Name</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {files.map((fileObj: any) => (
                        <tr key={fileObj.id}>
                          <td className="px-4 py-2 whitespace-nowrap text-sm">{fileObj.file.name}</td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm">
                            <select
                              value={fileObj.category}
                              onChange={(e) => updateFileCategory(fileObj.id, e.target.value)}
                              className="p-1 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:outline-none"
                            >
                              {categories.map(category => (
                                <option key={category} value={category}>{category}</option>
                              ))}
                            </select>
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm">{(fileObj.file.size / 1024).toFixed(1)} KB</td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm">
                            <button
                              onClick={() => removeFile(fileObj.id)}
                              className="bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded-lg"
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 flex justify-end">
                  <button
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                    onClick={handleUpload}
                    disabled={isDocumentUploading}
                  >
                    {isDocumentUploading ? "uploading..." : "Upload Documents"}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {step === 2 && (
          <div className="grid gap-8 place-items-center">
            <FaRegCircleCheck size={200} className="text-green-600" />
            <div className="text-center">
              <p className="font-bold text-green-600 text-lg">Documents Submitted successfully</p>
              <p>Complete your application by clicking the button below</p>
            </div>
            <button
              className="w-full lg:w-1/2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? "submitting..." : "Submit Application"}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default JobApplicationModal;
