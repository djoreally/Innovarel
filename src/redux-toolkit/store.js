import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "@/redux-toolkit/api/apiSlice";
// import projectsSliceReducer from "./projects/projectsSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        // projectsSlice: projectsSliceReducer,
    },
    devTools: process.env.NODE_ENV !== "production",

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
