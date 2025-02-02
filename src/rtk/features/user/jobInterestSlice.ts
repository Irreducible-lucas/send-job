import { createSlice } from "@reduxjs/toolkit";

interface JobInterestType {
  id: number;
  jobTitle: string;
  location: string;
}

interface initialState {
  jobList: JobInterestType[];
}

const initialState: initialState = {
  jobList: [],
};

const jobInterestSlice = createSlice({
  name: "job_interests",
  initialState: initialState,
  reducers: {
    addInterestedJob: (state, action) => {
      state.jobList.push(action.payload);
    },
    removeInterestedJob: (state, action) => {
      state.jobList = state.jobList.filter((job) => job.id !== action.payload);
    },
  },
});

export const { addInterestedJob, removeInterestedJob } =
  jobInterestSlice.actions;

export default jobInterestSlice.reducer;
