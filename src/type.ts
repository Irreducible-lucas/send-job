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
  createdAt: Date;
  id: number;
  employer_name: string;
  employer_logo: string;
  employer_website: string;
  job_title: string;
  job_employment_type: string;
  job_salary_currency: string;
  job_min_salary: number;
  job_max_salary: number;
  job_description: string;
  job_required_skills: string;
  job_is_remote: boolean;
  job_city: string;
  job_state: string;
  job_country: string;
  category_id: number;
  companyId: number;
  featured: boolean;
  posted: boolean;
  closed: boolean;
  required_docs: string;
  experience: string;
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

export enum GenderEnum {
  male = "male",
  female = "female",
}

export interface UserType {
  name: string;
  email: string;
  password: string;
  telephone: string;
  gender: GenderEnum;
  birthDate: string;
  domicile: string;
  skills: string;
  photoUrl: string;
  about_me: string;
}

export interface InterestedJobType {
  jobTitle: string;
  location: string;
}

export interface UserFormInput {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  telephone: string;
  gender: GenderEnum;
  birth_date: string;
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

export interface APIResponse {
  data: [];
  error: boolean;
  message: string;
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
export interface ModalProps {
  isOpen: boolean;
  onAddAnother: () => void;
  onClose: () => void;
  onSave: () => void;
  children: React.ReactNode;
}
export interface Field {
  name: string;
  label: string;
  required: boolean;
  type: "input" | "select" | "two-selects";
  options?: string[];
  selects?: {
    name: string;
    label: string;
    options: string[];
  }[];
}
