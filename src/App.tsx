import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  ErrorPage,
  HideJobDetails,
  JobPreferenceEdits,
  Profile,
  ProfileEdits,
  QualificationEdits,
  ReadyToWork,
} from "./components";
import Root from "./layout/Root";

import {
  Home,
  TalentSolutions,
  HireTalent,
  UpskillTeam,
  HiringTips,
  TrainingPrograms,
  Faqs,
  Resources,
  JobsPage,
  LoginPage,
  SignUpPage,
  JobSeekerSignUp,
  JobDetail,
  Application,
  ApplicationSucessful,
  EmployerSignUp,
  OnlyLoggedInUserRoute,
  EmployeeDashboard,
  EmployeeJobsPage,
  EmployeeProfile,
} from "./pages";
import ProfileRoot from "./layout/ProfileRoot";
import JobsTab from "./pages/JobsTab";
import { useEffect } from "react";
import { getCurrentUser } from "./rtk/features/user/authSlice";
import { useAppDispatch } from "./rtk/hooks";
import CompanyHome from "./components/CompanyHome";
import SignUpRoot from "./layout/SignUpRoot";
import EmployerRoot from "./layout/EmployerRoot";
import EmployeeRoot from "./layout/EmployeeRoot";
import { ApplicantInfo, EmployerDashboard, JobDetails, MyJobs } from "./pages/employer";

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
        <Route path="sign-up" element={<SignUpRoot />}>
          <Route index element={<SignUpPage />} />
          <Route
            path="job-seeker"
            element={<JobSeekerSignUp />}
          />
          <Route path="employer" element={<EmployerSignUp />} />
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

        {/* Employer Dashboard */}
        <Route path="employer" element={<OnlyLoggedInUserRoute><EmployerRoot /></OnlyLoggedInUserRoute>}>
          <Route index element={<EmployerDashboard />} />
          <Route path="jobs">
            <Route index element={<MyJobs />} />
            <Route path=":id" element={<JobDetails />} />
            <Route path=":id/applicant/:aid" element={<ApplicantInfo />} />
          </Route>
        </Route>

        {/* Employee Dashboard */}
        <Route path="employee" element={<EmployeeRoot />}>
          <Route index element={<EmployeeDashboard />} />
          <Route path="jobs">
            <Route index element={<EmployeeJobsPage />} />
            {/* <Route path=":id" element={<JobDetails />} />
            <Route path=":id/applicant/:aid" element={<ApplicantInfo />} /> */}
          </Route>
          <Route path="profile" element={<EmployeeProfile />} />
        </Route>

        {/* Catch-all Route */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
