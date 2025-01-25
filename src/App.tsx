import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ErrorPage } from "./components";
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
  // Dashboard,
  // AllEvent,
  // AttendanceManagement,
  // CheckIn,
  // AccountSetting,
  // Billing,
  Faqs,
  PostJob,
  Resources,
  JobsPage,
  LoginPage,
  SignUpPage,
  JobDetail,
} from "./pages";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" errorElement={<ErrorPage />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        {/* Root Layout */}
        <Route path="/" element={<Root />}>
          {/* Root Routes */}
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/talent-solution" element={<TalentSolutions />} />
          <Route path="/resources" element={<Resources />} />
          Talent Solutions Sub-Routes
          {/* <Route path="/talent-solution/post-job" element={<PostJob />} /> */}
          <Route path="/jobs/:slug" element={<JobDetail />} />
          <Route path="/talent-solution/hire-talent" element={<HireTalent />} />
          <Route
            path="/talent-solution/skill-assessment"
            element={<SkillAssessment />}
          />
          <Route path="/upskill-team" element={<UpskillTeam />} />
          Resources Sub-Routes
          <Route path="/resources/career-advice" element={<CareerAdvice />} />
          <Route path="/resources/hiring-tips" element={<HiringTips />} />
          <Route path="/resources/faqs" element={<Faqs />} />
          <Route
            path="/resources/training-programs"
            element={<TrainingPrograms />}
          />
        </Route>

        {/* Admin Dashboard Layout */}
        <Route path="dashboard" element={<DashboardRoot />}>
          {/* <Route index element={<Dashboard />} /> */}
          {/* <Route path="event" element={<AllEvent />} />
          <Route
            path="attendance-management"
            element={<AttendanceManagement />}
          />
          <Route path="check-in" element={<CheckIn />} />
          <Route path="account-setting" element={<AccountSetting />} />
          <Route path="billing" element={<Billing />} /> */}
        </Route>

        {/* Catch-all Route */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
