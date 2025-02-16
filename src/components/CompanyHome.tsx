import CheckOut from "./CheckOut";
import CompanyJobDetails from "./CompanyJobDetails";
import CompanyJobTab from "./CompanyJobTab";
import CompanyPostedJob from "./CompanyPostedJob";
import DetailProfile from "./DetailProfile";
import PromoteJobAds from "./PromoteJobAdv";
import Transactions from "./Transaction";

const CompanyHome = () => {
  return (
    <div className="bg-blue-50">
      <CompanyPostedJob />
      <CompanyJobTab />
      <CompanyJobDetails />
      <DetailProfile />
      <PromoteJobAds />
      <CheckOut />
      <Transactions />
    </div>
  );
};

export default CompanyHome;
