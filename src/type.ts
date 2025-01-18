export interface Link {
  id: number;
  text: string;
  url: string;
  child?: null | Link[];
}

export interface JobCategory {
  id: number;
  title: string;
  jobsAvailable: number;
  icon: string; 
}

export interface Job {
  id: number;
  companyLogo: string;
  companyName: string;
  location: string;
  jobTitle: string;
  jobType: string;
  postTime: string;
  salary: string;
  description: string;
  applicants: {
    profilePictures: string[];
    total: number;
  };
  skills: string[];
}
export interface recruiterProps {
  id: number;
  company: string;
  jobs: string | number;
  location: string;
  rating:  number;
  reviews: number
  logo: string,
}
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  message: string;
  image: string;
  rating: number;
}
export type NewsCardProps = {
  author: string;
  authorImg: string;
  date: string;
  title: string;
  description: string;
  image: string;
  category: string;
};
export interface FooterProps {
  title: string;
  links: string[];
}
