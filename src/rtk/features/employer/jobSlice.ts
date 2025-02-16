import { createSlice } from "@reduxjs/toolkit";

interface initialState {
    job: any;
    isJobModalOpen: boolean;
  }
  
  const initialState: initialState = {
    job: {},
    isJobModalOpen: false,
  };

const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        addJob: (state, action) => {
            console.log(action.payload);
        },
        setJobModalOpen: (state, action) => {
            state.isJobModalOpen = action.payload;
        }
    }
})

export default jobSlice.reducer;
export const {addJob, setJobModalOpen} = jobSlice.actions;