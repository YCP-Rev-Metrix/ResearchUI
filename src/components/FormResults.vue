<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, onMounted, computed } from 'vue';

type UserData = { firstname: string; lastname: string }; // Define the expected structure
const route = useRoute();
const apiData = ref<UserData[]>([]);

onMounted(() => {
  console.log('Route state at mounted:', route.query);
  // Check if apiData exists and is a string before parsing
  if (route.query.apiData && typeof route.query.apiData === 'string') {
    try {
      const parsedData = JSON.parse(route.query.apiData);
      // Validate parsed data is an array
      if (Array.isArray(parsedData)) {
        apiData.value = parsedData;
      }
    } catch (error) {
      console.error('Error parsing apiData:', error);
      apiData.value = [];
    }
  }
  console.log('Received apiData:', apiData.value);
});

const results = computed(() => {
  if (apiData.value && apiData.value.length > 0) {
    return {
      data: apiData.value.map(user => `${user.firstname} ${user.lastname}`).join('; ') || 'Not provided',
    };
  } else {
    return {
      data: 'No user data provided or unexpected data structure.',
    };
  }
});
</script>

<template>
  <div class="page">
    <div class="result" v-for="(user, index) in apiData" :key="index">
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