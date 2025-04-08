import { FaBriefcase } from "react-icons/fa";
import { useAppSelector } from "../../rtk/hooks";
import { CompanyInfoModal, CompanyImageUploadModal } from "..";

const CompanyProfileEdit = () => {
  const { currentUser } = useAppSelector((state) => state.auth);

  return (
    <div className="w-full">
      <div className="p-4 flex items-center gap-8">
        {currentUser?.company_logo_url ? (<img src={currentUser?.company_logo_url} className="w-[100px] h-[100px] max-w-[200px] object-contain rounded-full" alt="profile picture" />) : (
          <div className="w-[100px] h-[100px] grid place-items-center bg-blue-600">
            <FaBriefcase size={70} className="text-white" />
          </div>
        )}
        <div>
          <CompanyImageUploadModal />
          <p className="mt-2 text-sm text-gray-500">Make sure the image is clearly visible</p>
        </div>
      </div>
      <hr className="my-4" />

      {/* Company Information Section */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-black font-bold">Company Information</h2>
          <CompanyInfoModal />
        </div>
        <hr className="mb-4" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div>
            <h3 className="text-gray-500 text-sm">Company Name</h3>
            <p className="font-bold">{currentUser?.company_name ? currentUser?.company_name : "-"}</p>
          </div>
          <div>
            <h3 className="text-gray-500 text-sm">Company Email</h3>
            <p className="font-bold">{currentUser?.company_email ? currentUser?.company_email : "-"}</p>
          </div>
          <div>
            <h3 className="text-gray-500 text-sm">Company Website</h3>
            <p className="font-bold">{currentUser?.company_website ? currentUser?.company_website : "-"}</p>
          </div>
          <div>
            <h3 className="text-gray-500 text-sm">Company Contact Number</h3>
            <p className="font-bold">{currentUser?.company_contact_number ? currentUser?.company_contact_number : "-"}</p>
          </div>
          <div>
            <h3 className="text-gray-500 text-sm">Company Overview</h3>
            <p className="font-bold">{currentUser?.company_overview ? currentUser?.company_overview : "-"}</p>
          </div>
          <div>
            <h3 className="text-gray-500 text-sm">Company Address</h3>
            <p className="font-bold">{currentUser?.company_address ? currentUser?.company_address : "-"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfileEdit;
