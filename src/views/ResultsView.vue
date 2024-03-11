<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import FormResults from '../components/FormResults.vue';

const route = useRoute();
const formData = ref('');

onMounted(() => {
  if (typeof route.query.formData === 'string') {
    formData.value = JSON.parse(route.query.formData);
  }
});
</script>

<template>
  <div class="resultsPage">
    <h1>Results</h1>
    <p>Below is the data corresponding with your request:</p>
    <FormResults class="formRes" :results="formData" />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .resultsPage {
    padding-top: 35%;
    margin-left: 1%;
    min-height: 100vh;
    display: inline-block;
    align-items: center;
  }
  .resultsPage h1 {
    width: 100%;
    text-align: center;
    color: rgb(78,113,170);
  }
  .resultsPage p {
    width: 100%;text-align: center;

    margin: 3% auto auto;
    color: white;
  }
}
</style>
