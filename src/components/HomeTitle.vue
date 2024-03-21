<script setup>
// define props for passing in welcome message
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="blue">{{ msg }}</h1>
    <h3>
      The official data provider for the
      <a href="https://github.com/YCP-Rev-Metrix/" target="_blank" rel="noopener">RevMetrix</a> project's research data
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 3.0rem;
  position: relative;
  top: -10px;
  text-align: center !important;
}

h3 {
  text-align:  center !important;
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
