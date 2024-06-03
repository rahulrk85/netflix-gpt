import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
    name : "GPT",
    initialState : {
        gptToggle : false,
        moviePage : false,
        movieDetails: null,
        gptMovies : null,
        gptSearch : null,
    },
    reducers : {
        addGpt: (state)=>{
            state.gptToggle=!state.gptToggle;
        },
        addMoviePage: (state)=>{
            state.moviePage=!state.moviePage;
        },
        addGptMovies: (state,action)=>{
            state.gptMovies=action.payload;
        },
        addGptSearchedResult: (state,action)=>{
            state.gptSearch=action.payload;
        },
        addMovieDetail: (state,action)=>{
            state.movieDetails=action.payload;
        },
        
    }
});

export const {addGpt,addMoviePage,addMovieDetail,addGptMovies,addGptSearchedResult} = GPTSlice.actions;

export default GPTSlice.reducer;