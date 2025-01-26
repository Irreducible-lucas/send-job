import { Route, Routes } from "react-router-dom";
import {
  HideJobDetails,
  JobPreferenceEdits,
  Profile,
  ProfileEdits,
  QualificationEdits,
  ReadyToWork,
} from ".";

const ProfileRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="profile-edit" element={<ProfileEdits />} />
      <Route path="qualifications" element={<QualificationEdits />} />
      <Route path="job-preferences" element={<JobPreferenceEdits />} />
      <Route path="hide-job-details" element={<HideJobDetails />} />
      <Route path="ready-to-work" element={<ReadyToWork />} />
    </Routes>
  );
};

export default ProfileRouters;
