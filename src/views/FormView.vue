
import Question from '../components/Question.vue';

<script setup>
import Question from '../components/Question.vue'
</script>

<template>
    <div class="about">
        <Question />
    </div>
</template>

<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>
