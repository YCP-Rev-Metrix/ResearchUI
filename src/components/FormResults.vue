<script setup lang="js">
import { onMounted } from 'vue';
import { useApiStore } from '@/stores/useApiStore';

const endpointData = useApiStore().apiData;

onMounted(() => {
  console.log('Received apiData:', endpointData);
  if (endpointData.length > 0) {
    console.log('First item structure:', endpointData[0]);
  } else {
    console.log("Data not available yet.");
  }
});

// Loop for pulling all values of each field of the request
// Will be used with table implementation for display if implemented
for (let i = 0; i < endpointData.length; i ++) {
  for (const key in endpointData[i]) {
    console.log(key, endpointData[i][key]);
  }
}
</script>

<template>
  <div class="page">
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