import { createSlice } from "@reduxjs/toolkit";

interface initialState {
    jobInfo: any;
    isJobModalOpen: boolean;
    isEditJobModalOpen: boolean;
    isEmpJobDetailsModalOpen: boolean;
    isViewingApplicantProfile: boolean;
    applicantInfo: any;
    isJobAppModalOpen: any;
}

const initialState: initialState = {
    jobInfo: {},
    isJobModalOpen: false,
    isEditJobModalOpen: false,
    isEmpJobDetailsModalOpen: false,
    isViewingApplicantProfile: false,
    applicantInfo: {},
    isJobAppModalOpen: false,
};

const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        setJobInfo: (state, action) => {
            state.jobInfo = action.payload;
        },
        setJobModalOpen: (state, action) => {
            state.isJobModalOpen = action.payload;
        },
        setEditJobModalOpen: (state, action) => {
            state.isEditJobModalOpen = action.payload;
        },
        setEmpJobDetailsModalOpen: (state, action) => {
            state.isEmpJobDetailsModalOpen = action.payload;
        },
        setIsViewingApplicantProfile: (state, action) => {
            state.isViewingApplicantProfile = action.payload;
        },
        setApplicantInfo: (state, action) => {
            state.applicantInfo = action.payload;
        },
        setJobAppModalOpen: (state, action) => {
            state.isJobAppModalOpen = action.payload;
        }
    }
})

export default jobSlice.reducer;
export const { setJobInfo, setJobModalOpen, setEditJobModalOpen, setEmpJobDetailsModalOpen, setIsViewingApplicantProfile, setApplicantInfo, setJobAppModalOpen } = jobSlice.actions;