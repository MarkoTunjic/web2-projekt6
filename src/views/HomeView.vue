<script setup>
import MovieCard from "../components/MovieCard.vue";
</script>
<script>
import { useMoviesStore } from "../stores/movies"
import { mapState, mapActions } from "pinia";
export default {
  async mounted() {
    var a = await fetch("https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON")
    this.setMovies(await a.json())
  },
  computed: {
    ...mapState(useMoviesStore, ["allMovies"])
  },
  methods: {
    ...mapActions(useMoviesStore, ["setMovies", "removeAt"]),
    onDelete(args) {
      if (args.index >= 0 && args.index - 1 < this.allMovies.length) {
        this.removeAt(args.index - 1);
        return;
      }
      alert("Movie with index " + args.index + " does not exist");
    }
  }
}
</script>

<template>
  <main>
    <div v-for="(movie, index) in allMovies">
      <MovieCard :name="movie.Title" :img="movie.Images[0]" :plot="movie.Plot" :id="index + 1"
        :imdbRating="movie.imdbRating" :time="movie.Runtime" :autor="movie.Writer" @delete-movie="onDelete"></MovieCard>
    </div>
  </main>
</template>
