<script setup lang="js">
// imports
import { onMounted } from 'vue';
import { useApiStore } from '@/stores/useApiStore';

// store apiStore results from search page in variable
const endpointData = useApiStore().apiData;

// onMounted function to check if the data is being received correctly in the console
onMounted(() => {
  console.log('Received apiData:', endpointData);
  if (endpointData.length > 0) {
    console.log('Data received successfully.');
  } else {
    console.log('Data not received.');
  }
});

/*
  Loop for pulling all values of each field of the request,
  will be used with table column headers and fields for display if implemented

for (let i = 0; i < endpointData.length; i ++) {
  for (const key in endpointData[i]) {
    console.log(key, endpointData[i][key]);
  }
}
*/
</script>

<template>
  <div class="page">
    <!-- populate results section using a for-loop that iterates over the api data received -->
    <div class="result" v-for="(user, index) in endpointData" :key="index">
      <BAlert :model-value="true" variant="dark" class="piece1">Name:</BAlert>
      <BAlert :model-value="true" variant="info" class="piece2">{{ user.firstname }} {{ user.lastname }}</BAlert>
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