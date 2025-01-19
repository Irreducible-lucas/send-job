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
  Job,
  Faqs,
  PostJob,
  Resources,
} from "./pages"; // Add missing imports for all required components

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" errorElement={<ErrorPage />}>
        {/* Root Layout */}
        <Route path="/" element={<Root />}>
          {/* Root Routes */}
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/jobs" element={<Job />} />
          <Route path="/talent-solution" element={<TalentSolutions />} />
          <Route path="/resources" element={<Resources />} />
          Talent Solutions Sub-Routes
          <Route path="/talent-solution/post-job" element={<PostJob />} />
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
