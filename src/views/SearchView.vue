<script setup>
// imports
import SearchForm from '../components/SearchForm.vue'
</script>

<template>
  <div class="searchPage">
    <h1>Records Request</h1>
    <p>Please fill out the form below to send a records request to the RevMetrix Research database:</p>
    <SearchForm></SearchForm>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .searchPage {
    padding-top: 35%;
    margin-left: 1%;
    min-height: 100vh;
    display: inline-block;
    align-items: center;
  }
  .searchPage h1 {
    width: 50%;
    margin: auto;
    color: rgb(78,113,170);
  }
  .searchPage p {
    width: 80%;
    margin: 3% auto auto;
    color: white;
  }
}
</style>
