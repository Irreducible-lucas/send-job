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
  JobsPage,
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
          <Route path="/jobs" element={<JobsPage />} />
  
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
