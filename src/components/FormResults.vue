<script setup lang="ts">
import { defineProps, computed } from 'vue';

const props = defineProps({
  results: {
    type: Object,
    default: () => ({}),
  },
});

const resultDetails = computed(() => {
  let formattedDate = props.results.Date ? props.results.Date.split('T')[0] : 'Not provided';
  return {
    Actor: props.results.Actor || 'Not provided',
    Condition: props.results.Condition || 'Not provided',
    Date: formattedDate
  };
});
</script>

<template>
  <div class="page">
    <div class="result">
      <BAlert :model-value="true" variant="dark" class="piece1">Actor:</BAlert>
      <BAlert :model-value="true" variant="info" class="piece2">{{ resultDetails.Actor }}</BAlert>
    </div>
    <div class="result">
      <BAlert :model-value="true" variant="dark" class="piece1">Condition:</BAlert>
      <BAlert :model-value="true" variant="info" class="piece2">{{ resultDetails.Condition }}</BAlert>
    </div>
    <div class="result">
      <BAlert :model-value="true" variant="dark" class="piece1">Date:</BAlert>
      <BAlert :model-value="true" variant="info" class="piece2">{{ resultDetails.Date }}</BAlert>
    </div>
  </div>
</template>

<style>
.page {
  width: 80%;
  margin: 2% auto auto;
}
.result {
  display: flex;
}
.piece1 {
  text-align: center;
  display: inline-block;
  width: 30%;
  background: white;
  color: rgb(78,113,170) !important;;
}
.piece2 {
  text-align: center;
  display: inline-block;
  width: 70%;
  background: rgb(78,113,170) !important;
  color: white;
}
</style>
