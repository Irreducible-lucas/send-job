import { useState } from "react";
import { FaFileAlt, FaFilePdf, FaImage, FaArrowLeft } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { ellipse } from "../assets";
import { layout } from "../styles";
import { Job } from "../type";
import { JobDetailContent } from "../components";
import { toast } from "react-toastify";
import { useApplyForJobMutation } from "../rtk/services/application";

const Application = () => {
  const navigate = useNavigate();
  const [files, setFiles] = useState<
    Record<string, { file: File | null; uploadedAt: Date | null }>
  >({
    "CV/Resume": { file: null, uploadedAt: null },
    Portfolio: { file: null, uploadedAt: null },
    "Technical Proposal": { file: null, uploadedAt: null },
  });

  const handleFileChange = (
    type: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0] || null;
    setFiles((prev) => ({
      ...prev,
      [type]: { file, uploadedAt: file ? new Date() : null },
    }));
  };

  const getTimeAgo = (date: Date | null) => {
    if (!date) return "";
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    if (seconds < 60) return "Just now";
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    const days = Math.floor(hours / 24);
    return `${days} day${days > 1 ? "s" : ""} ago`;
  };

  const getFileIcon = (file: File | null) => {
    if (!file) return <FaFileAlt className="text-gray-400 text-xl" />;

    const extension = file.name.split(".").pop()?.toLowerCase();
    switch (extension) {
      case "pdf":
        return <FaFilePdf className="text-red-600 text-xl" />;
      case "jpg":
      case "jpeg":
      case "png":
      case "gif":
        return <FaImage className="text-blue-600 text-xl" />;
      default:
        return <FaFileAlt className="text-gray-400 text-xl" />;
    }
  };

  const handleEditProfile = () => {
    navigate("/profile");
  };

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const params = useLocation();

  const { state } = params.state;
  const [job, setJob] = useState<Job>(state);

  const [applyForJob, isLoading] = useApplyForJobMutation();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data: any = {
      jobId: job.id,
      userId: 1,
      status: "completed",
      information: formData.get("desc"),
    };

    let response = await applyForJob(data);

    console.log(response, "Saving response");

    if (response?.data) {
      if (response.data.message === "already applied!") {
        toast.info("already applied!");
        return;
      }
      toast.success("Application successful!");

      navigate("/jobs/success");
    } else {
      console.log(response.error);
      toast.error("Unable to apply for Job");
      // setErrorMessage('Error saving quote');
    }
  };

  return (
    <div
      className={`${layout.section} min-h-screen bg-gray-100 flex justify-center items-center`}
    >
      <div className="w-full max-w-screen-xl grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Application Section */}
        <div className="col-span-1 lg:col-span-2 bg-white rounded-2xl shadow-lg">
          {/* Header Section */}
          <div className="bg-blue-600 rounded-t-2xl text-white text-center py-6 relative">
            <div
              className="absolute left-4 top-4 text-white cursor-pointer"
              onClick={handleGoBack} // Click handler for the back button
            >
              <FaArrowLeft className="text-white text-lg" />
            </div>
            <div className="w-20 h-20 mx-auto rounded-full border-4 border-white overflow-hidden">
              <img
                src={ellipse}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-lg font-semibold mt-3">Zaire Torff Dandelia</h2>
            <p className="text-sm">UI/UX Designer</p>
            <p className="text-sm">Ztorff@gmail.com</p>
            <button
              onClick={handleEditProfile}
              className="bg-white text-blue-600 px-4 py-1 rounded-full mt-3 font-semibold text-sm"
            >
              Edit profile
            </button>
          </div>

          {/* Content Section */}
          <form onSubmit={handleSubmit}>
            <div className="p-6">
              {[
                { title: "CV/Resume", desc: "Add a resume to apply for a job" },
                { title: "Portfolio", desc: "Add your best portfolio" },
                {
                  title: "Technical Proposal",
                  desc: "Add your technical proposal",
                },
              ].map((item, index) => {
                const fileData = files[item.title];
                return (
                  <div
                    key={index}
                    className="flex justify-between items-center bg-gray-50 p-4 rounded-lg mb-3 shadow-sm"
                  >
                    <div className="flex items-center space-x-3">
                      {getFileIcon(fileData.file)}
                      <div>
                        <h3 className="text-sm font-semibold">{item.title}</h3>
                        {fileData.file ? (
                          <div>
                            <a
                              href="#"
                              className="text-blue-600 font-semibold hover:underline"
                            >
                              {fileData.file.name}
                            </a>
                            <p className="text-xs text-gray-500">
                              {getTimeAgo(fileData.uploadedAt)}
                            </p>
                          </div>
                        ) : (
                          <p className="text-xs text-gray-500">{item.desc}</p>
                        )}
                      </div>
                    </div>
                    <label>
                      <input
                        type="file"
                        className="hidden"
                        onChange={(e) => handleFileChange(item.title, e)}
                      />
                      <FaFileAlt className="text-gray-400 cursor-pointer" />
                    </label>
                  </div>
                );
              })}

              {/* Additional Information */}

              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h3 className="text-sm font-semibold">
                  Additional Information
                </h3>
                <p className="text-xs text-gray-500 mb-2">
                  Tell me why this job is right for you
                </p>
                <textarea
                  name="desc"
                  className="w-full p-2 border rounded-md text-sm outline-none resize-none"
                  rows={3}
                  placeholder="Tell me here ..."
                ></textarea>
              </div>
            </div>

            {/* Apply Button */}

            <div className="p-4">
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg text-sm font-semibold">
                Apply
              </button>
            </div>
          </form>
        </div>

        {/* Job Detail Section (Hidden on small screens) */}
        <div className="col-span-1 lg:block bg-white rounded-2xl shadow-lg p-6">
          <JobDetailContent job={job} showButton={false} />
        </div>
      </div>
    </div>
  );
};

export default Application;
