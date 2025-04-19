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
  Unauthorised,
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
  ProtectedRoute,
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
import {
  ApplicantInfo,
  EmployerDashboard,
  EmployerProfile,
  JobDetails,
  MyJobs,
} from "./pages/employer";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" errorElement={<ErrorPage />}>
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
          <Route path="/jobs/:jobId" element={<JobDetail />} />
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
        <Route
          path="employer"
          element={<ProtectedRoute allowedRoles={["company"]} />}
        >
          <Route element={<EmployerRoot />}>
            <Route index element={<EmployerDashboard />} />
            <Route path="jobs">
              <Route index element={<MyJobs />} />
              <Route path=":id" element={<JobDetails />} />
              <Route path=":id/applicant/:aid" element={<ApplicantInfo />} />
            </Route>
            <Route path="profile" element={<EmployerProfile />} />
          </Route>
        </Route>

        {/* Employee Dashboard */}
        <Route
          path="employee"
          element={<ProtectedRoute allowedRoles={["seeker"]} />}
        >
          <Route element={<EmployeeRoot />}>
            <Route index element={<EmployeeDashboard />} />
            <Route path="jobs">
              <Route index element={<EmployeeJobsPage />} />
              {/* <Route path=":id" element={<JobDetails />} />
            <Route path=":id/applicant/:aid" element={<ApplicantInfo />} /> */}
            </Route>
            <Route path="profile" element={<EmployeeProfile />} />
          </Route>
        </Route>

        {/* Authentication Routes */}
        <Route path="login" element={<LoginPage />} />
        <Route path="sign-up" element={<SignUpRoot />}>
          <Route index element={<SignUpPage />} />
          <Route path="job-seeker" element={<JobSeekerSignUp />} />
          <Route path="employer" element={<EmployerSignUp />} />
        </Route>

        {/* Catch-all Route */}
        <Route path="*" element={<ErrorPage />} />
        <Route path="/not-authorized" element={<Unauthorised />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
