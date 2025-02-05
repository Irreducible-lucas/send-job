import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  CompanyRegistration,
  ErrorPage,
  HideJobDetails,
  InstructorRegistration,
  JobPreferenceEdits,
  JobSeekerRegistration,
  Profile,
  ProfileEdits,
  QualificationEdits,
  ReadyToWork,
} from "./components";
import Root from "./layout/Root";
import DashboardRoot from "./layout/DashboardRoot";
import {
  Home,
  TalentSolutions,
  HireTalent,
  UpskillTeam,
  CareerAdvice,
  HiringTips,
  TrainingPrograms,
  Faqs,
  Resources,
  JobsPage,
  LoginPage,
  SignUpPage,
  JobDetail,
  Application,
  ApplicationSucessful,
} from "./pages";
import ProfileRoot from "./layout/ProfileRoot";
import JobsTab from "./pages/JobsTab";
import { useEffect } from "react";
import { getCurrentUser } from "./rtk/features/user/authSlice";
import { useAppDispatch } from "./rtk/hooks";
import SignUp from "./pages/SignUp";
import CompanyHome from "./components/CompanyHome";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" errorElement={<ErrorPage />}>
        {/* Authentication Routes */}
        <Route path="login" element={<LoginPage />} />
        <Route path="sign-up" element={<SignUp />}>
          <Route
            path="sign-up/job-seeker"
            element={<JobSeekerRegistration />}
          />
          <Route path="sign-up/company" element={<CompanyRegistration />} />
          <Route
            path="sign-up/instructor"
            element={<InstructorRegistration />}
          />
        </Route>

        {/* Profile Route and sub-routes */}
        <Route path="profile" element={<ProfileRoot />}>
          <Route index element={<Profile />} />
          <Route path="profile-edit" element={<ProfileEdits />} />
          <Route path="qualifications" element={<QualificationEdits />} />
          <Route path="job-preferences" element={<JobPreferenceEdits />} />
          <Route path="hide-job-details" element={<HideJobDetails />} />
          <Route path="ready-to-work" element={<ReadyToWork />} />
        </Route>

        {/* Root Layout */}
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/applications" element={<JobsTab />} />
          <Route path="/talent-solution" element={<TalentSolutions />} />
          <Route path="/resources" element={<Resources />} />
          Talent Solutions Sub-Routes
          {/* <Route path="/talent-solution/post-job" element={<PostJob />} /> */}
          <Route path="/jobs/:slug" element={<JobDetail />} />
          <Route path="/jobs/apply/:slug" element={<Application />} />
          <Route path="/talent-solution/hire-talent" element={<HireTalent />} />
          <Route path="/jobs/success" element={<ApplicationSucessful />} />
          {/* <Route
          <Route
            path="/talent-solution/hire-talent"
            element={<CompanyHome />}
          />
          <Route
            path="talent-solution/skill-assessment"
            element={<SavedJobTab />}
          /> */}
          <Route path="upskill-team" element={<UpskillTeam />} />
          {/* Resources Sub-Routes */}
          <Route path="resources/career-advice" element={<CompanyHome />} />
          <Route path="resources/hiring-tips" element={<HiringTips />} />
          <Route path="resources/faqs" element={<Faqs />} />
          <Route
            path="resources/training-programs"
            element={<TrainingPrograms />}
          />
        </Route>

        {/* Admin Dashboard Layout */}
        <Route path="dashboard" element={<DashboardRoot />}>
          {/* Add dashboard-related routes here */}
        </Route>

        {/* Catch-all Route */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
