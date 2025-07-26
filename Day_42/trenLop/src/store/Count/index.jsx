import {createSlice} from "@reduxjs/toolkit";

const countSlice = createSlice({
    name: "count",
    initialState: 0,
    reducers: {
        increase: (state) => {
            console.log("Increase action dispatched");
            return state + 1
        },
    }
})


export const {increase} = countSlice.actions;


export default countSlice;