import { createSlice } from "@reduxjs/toolkit";
export const universitySlice = createSlice({
    name: "university",
    initialState: {
        university: null,
    },
    reducers: {
        university: (state, action) => {
            state.university = action.payload;
        },

    },
});
export const { university } = universitySlice.actions;
export const selectUniversity = (state) => state.university.university;
export default universitySlice.reducer;
