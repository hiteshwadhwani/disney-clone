// import {createSlice} from '@reduxjs/toolkit'

// const intitalState = {
//     trending: null,
//     original:null,
//     recommended:null,
//     newDisney:null,
// }

// const movieSlice = createSlice({
//     name: 'movie',
//     intitalState,
//     reducers: {
//         setMovies:(state, action) => {
//             state.recommended = action.payload.recommended,
//             state.trending = action.payload.trending,
//             state.original = action.payload.original,
//             state.newDisney = action.payload.newDisney
//         }
//     }
// })

// export const {setMovies} = movieSlice.actions

// export const selectTrendingMovie = (state) => state.movie.trending
// export const selectOriginalMovie = (state) => state.movie.original
// export const selectRecommendedMovie = (state) => state.movie.recommended
// export const selectNewDisneyMovie = (state) => state.movie.newDisney

// export default movieSlice.reducer







import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    trending: null,
    original:null,
    recommended:null,
    newDisney:null,
}
const movieSlice = createSlice({
    name:"movie",
    initialState,
    reducers: {
        setMovie : (state, action) => {
            state.original = action.payload.original;
            state.trending = action.payload.trending;
            state.recommended = action.payload.recommended;
            state.newDisney = action.payload.newDisney;
        },
    }
})

export const {setMovie} = movieSlice.actions

export const selectTrendingMovie = (state) => state.movie.trending
export const selectOriginalMovie = (state) => state.movie.original
export const selectRecommendedMovie = (state) => state.movie.recommended
export const selectNewDisneyMovie = (state) => state.movie.newDisney

export default movieSlice.reducer