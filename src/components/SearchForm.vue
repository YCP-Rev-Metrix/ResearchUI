<script setup lang="ts">
// imports for vue functions, router, and datepicker package
import {reactive, ref, nextTick} from "vue";
import Datepicker from "vue3-datepicker"
import { useRouter } from 'vue-router';

// Define state for validation messages
const actorError = ref('');
const conditionError = ref('');
const dateError = ref('');
const actorGood = ref('');
const conditionGood = ref('');
const dateGood = ref('');

// datepicker values
const picked = ref(new Date()) // current date
const from = ref(new Date(1692147660000)) // starting Point of 8/5/2023
const to = ref(new Date()) // end point of current date

// form field options
const actorOptions = [
  {value: null, text: 'Please select an option'},
  {value: 1, text: 'First Shots'},
  {value: 2, text: 'Pocket Hits'}
]
const conditionOptions = [
  {value: null, text: 'Please select an option'},
  {value: 1, text: 'Hit the pocket'},
  {value: 2, text: 'Resulted in Strikes'},
  {value: 3, text: 'Resulted in one remaining pin of pins 4, 7, 8, 9 & 10'}
]

// reactive variable for storing values in fields of the form
const form = reactive({
  Actor: null,
  Condition: null,
  OptionalDate: false,
  Date: null
})
const show = ref(true) // create reactive ref object for use in form
const router = useRouter(); // router variable for use in navigating to next page on form submission

const validateForm = () => {
  let isValid = true;

  // Validate Actor
  if (!form.Actor) {
    actorError.value = 'Please select an option for % of.';
    actorGood.value = '';
    isValid = false;
  } else {
    actorError.value = '';
    actorGood.value = 'Looks good';
  }

  // Validate Condition
  if (!form.Condition) {
    conditionError.value = 'Please select an option for That.';
    conditionGood.value = '';
    isValid = false;
  } else {
    conditionError.value = '';
    conditionGood.value = 'Looks good';
  }

  // Validate Date if OptionalDate is checked
  if (form.OptionalDate && !form.Date) {
    dateError.value = 'Please select a date.';
    dateGood.value = ''
    isValid = false;
  } else {
    dateError.value = '';
    dateGood.value = 'Looks good'
  }

  return isValid;
};

// onSubmit function to handle how form submission passes values and navigates to page
const onSubmit = async (event) => {
  event.preventDefault(); // prevents default values and behaviors of form
  await nextTick();
  if (validateForm()) {
    alert(JSON.stringify(form)); // popup alert showing that values from form were successfully submitted (will be removed)

    // navigate to the result page with the form data submitted
    await router.push({
      name: 'result',
      params: {form: JSON.stringify(form)},
    });
  }
}
</script>

<template>
  <div class="page">
    <BForm @submit="onSubmit" v-if="show" :novalidate="true" :validated="true" >
      <BInputGroup class="mt-3">
        <template #prepend>
          <BInputGroupText><strong class="text-primary inputGrpPre">% of: </strong></BInputGroupText>
        </template>
        <BFormSelect v-model="form.Actor" :options="actorOptions" size="sm" class="mt-lg dropStyle" />
      </BInputGroup>
      <div v-if="actorError" class="text-danger">{{ actorError }}</div>
      <div v-if="actorGood" class="text-success">{{ actorGood }}</div>
      <BInputGroup class="mt-3">
        <template #prepend>
          <BInputGroupText><strong class="text-primary inputGrpPre">That:  </strong></BInputGroupText>
        </template>
        <BFormSelect v-model="form.Condition" :options="conditionOptions" size="sm" class="mt-lg dropStyle" />
      </BInputGroup>
      <div v-if="conditionError" class="text-danger">{{ conditionError }}</div>
      <div v-if="conditionGood" class="text-success">{{ conditionGood }}</div>
      <BInputGroup class="mt-3" style="background: white; border-radius: 4px">
        <template #prepend>
          <BInputGroupText><strong class="text-primary inputGrpPre">Date?</strong></BInputGroupText>
        </template>
        <BFormCheckbox v-model="form.OptionalDate" size="sm" class="mt-lg checkbox" />
      </BInputGroup>
      <BInputGroup class="mt-3" v-if="form.OptionalDate">
        <template #prepend>
          <BInputGroupText><strong class="text-primary inputGrpPre">Date: </strong></BInputGroupText>
        </template>
        <datepicker
            v-model="form.Date"
            :upper-limit="to"
            :lower-limit="from"
            :clearable="true"
            placeholder="2023-08-15"
            class="dateInput">
          <template v-slot:clear="{ onClear }">
            <button type="button" @click="onClear" class="clearButton">x</button>
          </template>
        </datepicker>
      </BInputGroup>
      <div v-if="dateError" class="text-danger">{{ dateError }}</div>
      <div v-if="dateGood && form.OptionalDate && form.Date" class="text-success">{{ dateGood }}</div>
      <BButton type="submit" style="margin-top:3%;" variant="success">Submit</BButton>
    </BForm>
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
.checkbox {
  margin-left: 25% !important;
  margin-top: 30% !important;
  font-size: 18px !important;
}
.dateInput {
  display: inline-block !important;
  text-align: center !important;
  width: 100% !important;
  padding: 3% !important;
  color: rgb(78,113,170) !important;
  font-weight: bold !important;
  background: whitesmoke !important;
  text-decoration-color: #0a3622;
  border: none !important;
  position: relative;
}
.clearButton {
  padding-top: 2% !important;
  padding-bottom: 2% !important;
  color: red !important;
  font-weight: bold !important;
  background: whitesmoke !important;
  border: none !important;
  margin-right: 1em !important;
}
.v3dp__input_wrapper {
  width: 120% !important; /* Fill the width */
  padding: 0 !important;
  margin: 0 !important;
}
.v3dp__datepicker {
  width: 40% !important;
  padding: 0 !important;
  margin: 0 !important;
}
.v3dp__clearable {
  position: absolute !important;
  right: 40% !important; /* Adjust as needed for spacing inside the input field */
  top: 50% !important;
  transform: translateY(-50%) translateX(160%) !important;
  z-index: 2 !important; /* Ensure it's above the input field */
}
/* Override any inline styles that may be passed */
.dateInput[v-model="form.Date"][style] {
  width: 100% !important;
  padding: 0 !important;
}
</style>

