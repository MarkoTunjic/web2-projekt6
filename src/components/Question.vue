<script>
import { useMoviesStore } from "../stores/movies"
import { mapState, mapActions } from "pinia";
export default {
    data() {
        return {
            favoriteMovie: "",
            answered: false
        }
    },
    methods: {
        ...mapActions(useMoviesStore, ["setMovies"]),
        onSubmit() {
            if (this.favoriteMovie.trim().length != 0)
                this.answered = true;
        }
    },
    computed: {
        ...mapState(useMoviesStore, ["allMovies"]),
        message() {
            return this.allMovies.some((elem) => {
                return elem.Title.toString().trim() === this.favoriteMovie;
            }) ?
                "So your favorite movie is: " + this.favoriteMovie + ". Very nice choice."
                : "Sorry that movie does not exist in this database."
        }
    },
    async mounted() {
        if (this.allMovies.length === 0) {
            var a = await fetch("https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON")
            this.setMovies(await a.json())
        }

    },
}
</script>

<template>
    <div v-if="answered">
        {{ message }}
    </div>
    <div v-else>
        <label for="favoriteMovieInput">What's your favorite movie?</label>
        <input id="favoriteMovieInput" v-model="favoriteMovie" />
        <button @click="onSubmit">Submit</button>
    </div>
</template>

<style scoped>
h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
}

h3 {
    font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
    text-align: center;
}

@media (min-width: 1024px) {

    .greetings h1,
    .greetings h3 {
        text-align: left;
    }
}
</style>
