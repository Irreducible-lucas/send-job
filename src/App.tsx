import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
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
import DashboardRoot from "./layout/DashboardRoot";
import {
  Home,
  TalentSolutions,
  HireTalent,
  SkillAssessment,
  UpskillTeam,
  CareerAdvice,
  HiringTips,
  TrainingPrograms,
  Faqs,
  PostJob,
  Resources,
  JobsPage,
  LoginPage,
  SignUpPage,
  JobDetail,
} from "./pages";
import ProfileRoot from "./layout/ProfileRoot";

// const ProfileLayout = () => {
//   return (
//     <div>
//       <h1>Profile</h1>
//       <Outlet />
//     </div>
//   );
// };

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" errorElement={<ErrorPage />}>
        {/* Authentication Routes */}
        <Route path="login" element={<LoginPage />} />
        <Route path="sign-up" element={<SignUpPage />} />

        {/* Profile Route and sub-routes */}
        <Route path="profile" element={<ProfileRoot />}>
          <Route index element={<Profile />} />
          <Route path="profile-edir" element={<ProfileEdits />} />
          <Route path="qualifications" element={<QualificationEdits />} />
          <Route path="job-preferences" element={<JobPreferenceEdits />} />
          <Route path="hide-job-details" element={<HideJobDetails />} />
          <Route path="ready-to-work" element={<ReadyToWork />} />
        </Route>

        {/* Root Layout */}
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="jobs" element={<JobsPage />} />
          <Route path="talent-solution" element={<TalentSolutions />} />
          <Route path="resources" element={<Resources />} />

          {/* Talent Solutions Sub-Routes */}
          <Route path="talent-solution/post-job" element={<JobDetail />} />
          <Route path="talent-solution/hire-talent" element={<HireTalent />} />
          <Route
            path="talent-solution/skill-assessment"
            element={<SkillAssessment />}
          />
          <Route path="upskill-team" element={<UpskillTeam />} />

          {/* Resources Sub-Routes */}
          <Route path="resources/career-advice" element={<CareerAdvice />} />
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
