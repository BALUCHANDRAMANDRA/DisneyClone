import { configureStore } from "@reduxjs/toolkit";
import  userReducer from "../features/userSlice"
import movieReducer from "../features/movies/movieSlice"
/*const store = configureStore({
    reducer: {},
    middelware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export default store;*/


const store = configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
    },
});

export default store;

