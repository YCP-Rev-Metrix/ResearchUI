<script setup>
import FormResults from '../components/FormResults.vue'
</script>

<template>
  <div class="resultsPage">
    <h1>Results</h1>
    <p>Below is the data corresponding with your request:</p>
    <FormResults></FormResults>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .resultsPage {
    padding-top: 20%;
    margin-left: 1%;
    min-height: 100vh;
    display: inline-block;
    align-items: center;
  }
  .resultsPage h1 {
    width: 100%;
    color: rgb(78,113,170);
  }
  .resultsPage p {
    width: 100%;
    margin: 3% auto auto;
    color: white;
  }
}
</style>
