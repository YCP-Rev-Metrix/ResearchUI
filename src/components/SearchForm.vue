<script setup lang="ts">
import {reactive, ref} from "vue";
import Datepicker from "vue3-datepicker"

const picked = ref(new Date())
const from = ref(new Date(1692147660000))
const to = ref(new Date())

const field1 = ref()
const field2 = ref()
const field3 = ref()
const field5 = ref()

const options1 = [
  {value: null, text: 'Please select an option'},
  {value: 1, text: 'ddx'},
  {value: 2, text: 'ddy'},
  {value: 3, text: 'ddz'},
  {value: 4, text: 'speed'},
  {value: 5, text: 'All'},
]
const options2 = [
  {value: null, text: 'Please select an option'},
  {value: 1, text: 'Game 1'},
  {value: 2, text: 'Game 2'},
  {value: 3, text: 'Game 3'},
  {value: 4, text: 'Game 4'},
  {value: 5, text: 'Game 5'},
]
const options3 = [
  {value: null, text: 'Please select an option'},
  {value: 0, text: 'No'},
  {value: 1, text: 'Yes'}
]
const options5 = [
  {value: null, text: 'Please select an option'},
  {value: 1, text: 'Will be populated with list of all RevMetrix users'}
]

const form = reactive({
  ShotData: null,
  GameNumber: null,
  Session: null,
  Date: new Date(),
  Bowler: null
})

const show = ref(true)

const onSubmit = (event) => {
  event.preventDefault()
  alert(JSON.stringify(form))
}
</script>

<template>
  <div class="page">
    <form @submit="onSubmit" v-if="show">
      <BInputGroup class="mt-3">
        <template #prepend>
          <BInputGroupText><strong class="text-primary inputGrpPre">Shot Data: </strong></BInputGroupText>
        </template>
        <BFormSelect v-model="form.ShotData" :options="options1" size="sm" class="mt-lg dropStyle" />
      </BInputGroup>
      <BInputGroup class="mt-3">
        <template #prepend>
          <BInputGroupText><strong class="text-primary inputGrpPre">Game:  </strong></BInputGroupText>
        </template>
        <BFormSelect v-model="form.GameNumber" :options="options2" size="sm" class="mt-lg dropStyle" />
      </BInputGroup>
      <BInputGroup class="mt-3">
        <template #prepend>
          <BInputGroupText><strong class="text-primary inputGrpPre">Session? </strong></BInputGroupText>
        </template>
        <BFormSelect v-model="form.Session" :options="options3" size="sm" class="mt-lg dropStyle" />
      </BInputGroup>
      <BInputGroup class="mt-3">
        <template #prepend>
          <BInputGroupText><strong class="text-primary inputGrpPre">Date: </strong></BInputGroupText>
        </template>
        <datepicker
            v-model="form.Date"
            :upper-limit="to"
            :lower-limit="from"
            :clearable="true"
            class="dateInput">
        </datepicker>
      </BInputGroup>
      <BInputGroup class="mt-3">
        <template #prepend>
          <BInputGroupText><strong class="text-primary inputGrpPre">Bowler: </strong></BInputGroupText>
        </template>
        <BFormSelect v-model="form.Bowler" :options="options5" size="sm" class="mt-lg dropStyle" />
      </BInputGroup>
      <BButton type="submit" style="margin-top:2%;" variant="success">Button</BButton>
    </form>
  </div>
</template>

<style>
.page {
  width: 80%;
  margin: 2% auto auto;
}
.inputGrpPre {
  background: whitesmoke !important;
  color: rgb(78,113,170) !important;
  font-weight: bold !important;
}
.dropStyle {
  color: rgb(78,113,170) !important;
  font-weight: bold !important;
  background: whitesmoke;
}
.dateInput {
  color: rgb(78,113,170) !important;
  font-weight: bold !important;
  background: whitesmoke;
  text-decoration-color: #0a3622;
  border: 0;
}
</style>

