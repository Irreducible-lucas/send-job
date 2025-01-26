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
  rating: number;
  reviews: number;
  logo: string;
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

export interface FeaturedJobProps {
  companyLogo: string;
  companyName: string;
  location: string;
  jobTitle: string;
  salary: string;
  jobType: string;
  postedTime: string;
}

export interface GeneralList {
  id: number;
  title: string;
  // value: string;
}

export interface UserModel {
  Id: string;
  Email: string;
  FirstName: string;
  Role: "Admin" | "user" | "interpreter" | "PrivateCustomer";
  About?: string;
  Address?: string;
  Zipcode?: string;
  City: string;
  State?: number;
  Adresse?: string;
  GenderId?: number;
  LastName?: string;
}


export interface ProgramType {
  id: number;
  image: string;
  title: string;
  overview: string;
}
export interface JobDetailCardProps {
  title: string;
  company: string;
  location?: string;
  type: string;
  experience: string;
}

export interface JobDetailSidebarProps {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  mode: string;
  experience: string;
  posted: string;
  applicants: number;
  logo: string;
}
export interface FileCardProps {
  fileName: string;
  fileType: string; 
  filePreviewUrl: string;
  onClick: () => void;
}
export type Location = {
  id: number;
  name: string;
};
