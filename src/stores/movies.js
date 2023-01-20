import { defineStore } from 'pinia'

export const useMoviesStore = defineStore('movies', {
    state: () => ({
        _allMovies: []
    }),
    getters: {
        allMovies: (state) => {
            return state._allMovies || [];
        },
        getMovieByIndex: (state) => {
            return (index) => state._allMovies[index];
        }
    },
    actions: {
        removeAt(index) {
            this._allMovies.splice(index, 1);
        },
        setMovies(movies) {
            this._allMovies = movies;
        }
    }
});