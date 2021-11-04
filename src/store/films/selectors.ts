export const selectFilms = (state:any) => {
    return state.films.films
}

export const selectFilmsStatus = (state:any) => {
    return state.films.isLoading
} 