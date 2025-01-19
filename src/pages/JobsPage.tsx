import {
 
  SearchJobs,
} from "../components";
import PostedJob from "../components/PostedJob";
import { jobCategories } from "../constant";



const JobsPage = () => {
 
  return (
    <main className="h-full relative">
     
      <SearchJobs
        regions={[]}
        jobs={[]}
        jobClassifications={jobCategories}
      />
  
      <PostedJob/>
    
    </main>
  );
};

export default JobsPage;
