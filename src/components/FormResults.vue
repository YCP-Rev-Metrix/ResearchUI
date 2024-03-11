<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { RouteParamValue, useRoute } from 'vue-router';

const formResults = ref<string | RouteParamValue[]>(null);

onMounted(() => {
  // Retrieve form results from route params
  const route = useRoute();
  const form = route.params.form;

  // Assign form results to the reactive variable
  if (typeof form === 'string') {
    formResults.value = form;
  } else {
    // Handle the case where form is an array of RouteParamValue
    // You might want to process it differently based on your use case

    formResults.value = JSON.stringify(form);
  }
});
</script>

<template>
  <div class="page">
    <pre>{{ formResults }}</pre>
  </div>
</template>

<style>
.page {
  width: 80%;
  margin: 2% auto auto;
}
</style>
