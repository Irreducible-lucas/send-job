import { Christiana, ellipse, event } from "../assets";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  FeaturedJobProps,
  FooterProps,
  Job,
  JobCategory,
  JobDetailSidebarProps,
  Link,
  NewsCardProps,
  recruiterProps,
  Testimonial,
} from "../type";

export const BASE_URL = "http://localhost:8080/api/";

export const links: Link[] = [
  {
    id: 1,
    text: "Home",
    url: "/home",
    child: null,
  },
  {
    id: 2,
    text: "Jobs",
    url: "/jobs",
    child: null,
  },

  {
    id: 3,
    text: "Talent Solutions",
    url: "/talent-solution",
    child: [
      {
        id: 1,
        text: "Post Jobs",
        url: "/talent-solution/post-job",
      },
      { id: 2, text: "Hire Talent", url: "/talent-solution/hire-talent" },
      {
        id: 3,
        text: "Skill Assessment",
        url: "/talent-solution/skill-assessment",
      },
      {
        id: 4,
        text: "Upskill Team",
        url: "/upskill-team",
      },
    ],
  },
  {
    id: 4,
    text: "Resources",
    url: "/resources",
    child: [
      {
        id: 1,
        text: "Career Advice",
        url: "/resources/career-advice",
      },
      {
        id: 2,
        text: "Hiring Tips",
        url: "/resources/hiring-tips",
      },
      {
        id: 3,
        text: "FAQs",
        url: "/resources/faqs",
      },
      {
        id: 4,
        text: "Training Programs",
        url: "/resources/training-programs",
      },
    ],
  },
];
export const jobCategories: JobCategory[] = [
  {
    id: 1,
    title: "Marketing & Sale",
    jobsAvailable: 1526,
    icon: Christiana,
  },
  {
    id: 2,
    title: "Customer Help",
    jobsAvailable: 1526,
    icon: Christiana,
  },
  {
    id: 3,
    title: "Finance",
    jobsAvailable: 168,
    icon: Christiana,
  },
  {
    id: 4,
    title: "Software",
    jobsAvailable: 300,
    icon: Christiana,
  },
  {
    id: 5,
    title: "Human Resource",
    jobsAvailable: 125,
    icon: Christiana,
  },
  {
    id: 6,
    title: "Customer Help",
    jobsAvailable: 1526,
    icon: Christiana,
  },
];
export const postedJobs: Job[] = [
  {
    id: 1,
    companyLogo: ellipse,
    companyName: "Facebook.com",
    location: "New York, US",
    jobTitle: "Graphic Designer fulltime",
    jobType: "Fulltime",
    postTime: "4 Minutes ago",
    salary: "$500/hour",
    description:
      "Lorem Ipsum is simply dummy text of printing and typesetting industry.",
    applicants: {
      profilePictures: [
        Christiana,
        Christiana,
        Christiana,
        Christiana,
        Christiana,
      ],
      total: 86,
    },
    skills: ["AdobeXd", "Figma", "Photoshop", "Corel"],
  },
  {
    id: 2,
    companyLogo: ellipse,
    companyName: "Mackdonals.com",
    location: "New York, US",
    jobTitle: "Web Developer",
    jobType: "Fulltime",
    postTime: "4 Minutes ago",
    salary: "$250/hour",
    description:
      "Lorem Ipsum is simply dummy text of printing and typesetting industry.",
    applicants: {
      profilePictures: [Christiana, Christiana],
      total: 50,
    },
    skills: ["AdobeXd", "Figma", "Photoshop", "Corel"],
  },
  {
    id: 3,
    companyLogo: ellipse,
    companyName: "Cocacola.com",
    location: "New York, US",
    jobTitle: "Delivery Boy",
    jobType: "Fulltime",
    postTime: "4 Minutes ago",
    salary: "$250/hour",
    description:
      "Lorem Ipsum is simply dummy text of printing and typesetting industry.",
    applicants: {
      profilePictures: [
        Christiana,
        Christiana,
        Christiana,
        Christiana,
        Christiana,
        Christiana,
      ],
      total: 200,
    },
    skills: ["AdobeXd", "Figma", "Photoshop", "Corel"],
  },
];
export const recruiters: recruiterProps[] = [
  {
    id: 1,
    company: "LinkedIn",
    jobs: 25,
    location: "New York, US",
    rating: 4.5,
    reviews: 68,
    logo: Christiana,
  },
  {
    id: 2,
    company: "Apple Inc.",
    jobs: 25,
    location: "New York, US",
    rating: 4.5,
    reviews: 68,
    logo: Christiana,
  },
  {
    id: 3,
    company: "Microsoft.",
    jobs: 25,
    location: "New York, US",
    rating: 4.5,
    reviews: 68,
    logo: Christiana,
  },
  {
    id: 4,
    company: "Tesla",
    jobs: 25,
    location: "New York, US",
    rating: 4.5,
    reviews: 68,
    logo: Christiana,
  },

  {
    id: 5,
    company: "Coca-cola",
    jobs: 25,
    location: "New York, US",
    rating: 4.5,
    reviews: 68,
    logo: Christiana,
  },
  {
    id: 6,
    company: "LinkedIn",
    jobs: 25,
    location: "New York, US",
    rating: 4.5,
    reviews: 68,
    logo: Christiana,
  },
  {
    id: 7,
    company: "Apple Inc.",
    jobs: 25,
    location: "New York, US",
    rating: 4.5,
    reviews: 68,
    logo: Christiana,
  },
  {
    id: 8,
    company: "Microsoft.",
    jobs: 25,
    location: "New York, US",
    rating: 4.5,
    reviews: 68,
    logo: Christiana,
  },
  {
    id: 9,
    company: "Tesla",
    jobs: 25,
    location: "New York, US",
    rating: 4.5,
    reviews: 68,
    logo: Christiana,
  },

  {
    id: 10,
    company: "Coca-cola",
    jobs: 25,
    location: "New York, US",
    rating: 4.5,
    reviews: 68,
    logo: Christiana,
  },
];
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Guy Hawkins",
    role: "UI/UX Designer",
    message:
      "I have minim mollit non deserunt ullamco est sit aliqua dolor do Eam et sint. Velit officia consequat.",
    image: Christiana,
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Doe",
    role: "Product Manager",
    message:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: ellipse,
    rating: 5,
  },
  {
    id: 3,
    name: "Guy Hawkins",
    role: "UI/UX Designer",
    message:
      "I have minim mollit non deserunt ullamco est sit aliqua dolor do Eam et sint. Velit officia consequat.",
    image: ellipse,
    rating: 5,
  },
  {
    id: 4,
    name: "Jane Doe",
    role: "Product Manager",
    message:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: Christiana,
    rating: 5,
  },
  {
    id: 5,
    name: "Jane Doe",
    role: "Product Manager",
    message:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: Christiana,
    rating: 5,
  },
  {
    id: 6,
    name: "Jane Doe",
    role: "Product Manager",
    message:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: Christiana,
    rating: 5,
  },
  {
    id: 7,
    name: "Jane Doe",
    role: "Product Manager",
    message:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: Christiana,
    rating: 5,
  },
  {
    id: 8,
    name: "Jane Doe",
    role: "Product Manager",
    message:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: Christiana,
    rating: 5,
  },
];
export const newsCard: NewsCardProps[] = [
  {
    author: "LADY DIANA",
    authorImg: ellipse,
    date: "04 July",
    title: "How to convince recruiters and get your dream job",
    description:
      "New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit.",
    image: event,
    category: "Events",
  },
  {
    author: "CHRISTINA FISCHER",
    authorImg: ellipse,
    date: "04 July",
    title: "How to choose the right career in the age of technology",
    description:
      "New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit.",
    image: event,
    category: "Events",
  },
  {
    author: "PETER HAWKINS",
    authorImg: ellipse,
    date: "04 July",
    title: "Best IT jobs for the upcoming future",
    description:
      "New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit.",
    image: event,
    category: "Events",
  },
];
export const footerLinks: FooterProps[] = [
  {
    title: "For Candidate",
    links: ["User Dashboard", "Alert resume", "Candidates", "Blog List"],
  },
  {
    title: "For Employers",
    links: ["Post Jobs", "Blog Grid", "Contact", "Jobs Listing"],
  },
  {
    title: "Helpful Resources",
    links: ["FAQs", "Employer detail", "Profile"],
  },
  {
    title: "Quick Links",
    links: ["Home", "About us", "Bookmark"],
  },
];

export const featuredJob: FeaturedJobProps[] = [
  {
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png",
    companyName: "Pinterest",
    location: "Washington U.S.A.",
    jobTitle: "Backend Developer",
    salary: "$130",
    jobType: "Full Time",
    postedTime: "1 Day ago",
  },
  {
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/2/24/Yahoo%21_logo.svg",
    companyName: "Yahoo!",
    location: "Washington U.S.A.",
    jobTitle: "Backend Developer",
    salary: "$130",
    jobType: "Full Time",
    postedTime: "1 Day ago",
  },
  {
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png",
    companyName: "Google",
    location: "Washington U.S.A.",
    jobTitle: "Backend Developer",
    salary: "$130",
    jobType: "Full Time",
    postedTime: "1 Day ago",
  },
  {
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png",
    companyName: "Pinterest",
    location: "Washington U.S.A.",
    jobTitle: "Backend Developer",
    salary: "$130",
    jobType: "Full Time",
    postedTime: "1 Day ago",
  },
  {
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png",
    companyName: "Pinterest",
    location: "Washington U.S.A.",
    jobTitle: "Backend Developer",
    salary: "$130",
    jobType: "Full Time",
    postedTime: "1 Day ago",
  },
  {
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/2/24/Yahoo%21_logo.svg",
    companyName: "Yahoo!",
    location: "Washington U.S.A.",
    jobTitle: "Backend Developer",
    salary: "$130",
    jobType: "Full Time",
    postedTime: "1 Day ago",
  },
  {
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png",
    companyName: "Google",
    location: "Washington U.S.A.",
    jobTitle: "Backend Developer",
    salary: "$130",
    jobType: "Full Time",
    postedTime: "1 Day ago",
  },
  {
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png",
    companyName: "Pinterest",
    location: "Washington U.S.A.",
    jobTitle: "Backend Developer",
    salary: "$130",
    jobType: "Full Time",
    postedTime: "1 Day ago",
  },
];

export const jobDetails = {
  title: "UI/UX Designer",
  company: "Pixelz Studio",
  companyLogo: ellipse,
  location: {
    name: "Yogyakarta, Indonesia",
    icon: "fa-location-dot",
  },
  tags: ["Fulltime", "Remote", "2-4 Years"],
  description:
    "As a UI/UX Designer at Pixelz Studio, you'll focus on designing user-friendly interfaces across several platforms (web, mobile, dashboards, etc.) to meet user needs...",
  qualifications: [
    "At least 2-4 years of relevant experience in product design.",
    "Knowledge of design validation through quantitative or qualitative research.",
    "Proficient in Figma and FigJam.",
    "Experience with analytics tools to gather user data.",
  ],
  responsibilities: [
    "Create user journeys for various platforms (web and app).",
    "Identify design problems and propose elegant solutions.",
    "Develop low and high-fidelity designs, prototypes, and workflows.",
    "Collaborate with design leads, engineers, and PMs to execute tasks.",
  ],
};

export const jobDeatilsSidebar: JobDetailSidebarProps[] = [
  {
    id: 1,
    title: "Lead UI Designer",
    company: "Gojek",
    location: "Jakarta, Indonesia",
    type: "Fulltime",
    mode: "Onsite",
    experience: "3-5 Years",
    posted: "2 days ago",
    applicants: 521,
    logo: ellipse,
  },
  {
    id: 2,
    title: "Sr. UX Designer",
    company: "GoPay",
    location: "Jakarta, Indonesia",
    type: "Fulltime",
    mode: "Onsite",
    experience: "3-5 Years",
    posted: "2 days ago",
    applicants: 210,
    logo: ellipse,
  },
  {
    id: 3,
    title: "Jr. UI Designer",
    company: "OVO",
    location: "Jakarta, Indonesia",
    type: "Fulltime",
    mode: "Onsite",
    experience: "1-3 Years",
    posted: "an hour ago",
    applicants: 120,
    logo: ellipse,
  },
];
export const otherJobs: JobDetailSidebarProps[] = [
  {
    id: 1,
    title: "UI Designer",
    company: "Pixelz Studio",
    location: "Jakarta, Indonesia",
    type: "Fulltime",
    mode: "Onsite",
    experience: "3-5 Years",
    posted: "2 days ago",
    applicants: 521,
    logo: ellipse,
  },
  {
    id: 1,
    title: "UI Designer",
    company: "Pixelz Studio",
    location: "Jakarta, Indonesia",
    type: "Fulltime",
    mode: "Onsite",
    experience: "3-5 Years",
    posted: "2 days ago",
    applicants: 521,
    logo: ellipse,
  },
];
export const files = [
  {
    fileName: "Jobs_Requirements.pdf",
    fileType: "image",
    filePreviewUrl:
      "https://images.unsplash.com/photo-1579422028695-9caa16d483d3?w=800&q=80",
  },
  {
    fileName: "Company_Benefits.jpg",
    fileType: "image",
    filePreviewUrl:
      "https://images.unsplash.com/photo-1579422028695-9caa16d483d3?w=800&q=80",
  },
];
