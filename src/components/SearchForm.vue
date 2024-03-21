<script setup lang="js">
// imports for vue functions, router, and datepicker package
import {reactive, ref, nextTick, watch} from "vue";
import Datepicker from "vue3-datepicker"
import { useRouter } from 'vue-router';
import { useApiStore } from '@/stores/useApiStore';

// reactive variable for storing values in fields of the form
const form = reactive({
  Actor: null,
  Condition: null,
  OptionalDate: false,
  Date: null
})

// define states for the validation messages
const actorGood = ref('');
const conditionGood = ref('');
const dateGood = ref('');
const actorError = ref('');
const conditionError = ref('');
const dateError = ref('');

// starting date of 8/5/2023
const from = ref(new Date(1692147660000))
// end date of today
const to = ref(new Date())

// options for first dropdown, "% of"
const actorOptions = [
  {value: null, text: 'Please select an option'},
  {value: 1, text: 'First Shots'},
  {value: 2, text: 'Pocket Hits'}
]

// options for second dropdown, "That"
const conditionOptionsMap = {
  // placeholder
  null: [{ value: null, text: 'Please select an option' }],
  // options for if First Shots is selected in top dropdown
  1: [
    { value: null, text: 'Please select an option' },
    { value: 1, text: 'Hit the pocket' }
  ],
  // options for if Pocket Hits is selected in top dropdown
  2: [
    { value: null, text: 'Please select an option' },
    { value: 2, text: 'Resulted in Strikes' },
    { value: 3, text: 'Resulted in one remaining pin of pins 4, 7, 8, 9 & 10' }
  ],
};

// reactive variable to determine state of the Condition dropdown options
const conditionOptions = ref([...conditionOptionsMap[null]]);

// watch condition for monitoring state of dropdown options
watch(() => form.Actor, (newActor) => {
  conditionOptions.value = [...conditionOptionsMap[newActor]];
  form.Condition = null;
});

// create reactive ref object for use in form
const show = ref(true)

// router variable for use in navigating to next page on form submission
const router = useRouter();

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
  } else if (form.OptionalDate && form.Date) {
    dateError.value = '';
    dateGood.value = 'Looks good'
  }

  // returns true or false if form fields are valid or not
  return isValid;
};

// onSubmit function to handle how form submission passes values and navigates to page
const onSubmit = async (event) => {
  // prevents default values and behaviors of form
  event.preventDefault();
  // waits for values to process prior to submission
  await nextTick();
  // check if form is valid
  if (validateForm()) {
    try {
      // sets variable for the useApiStore for endpoint calling
      const apiStore1 = useApiStore();
      // call endpoint and send request through api store
      await apiStore1.setApiData('https://api.revmetrix.io/api/user/getusers'); /* NEED TO MAKE THIS A VARIABLE */
      const apiStore2 = useApiStore();
      await apiStore2.setApiData('https://api.revmetrix.io/api/user/getusers'); /* NEED TO MAKE THIS A VARIABLE */

      // navigate to the result page
      await router.push({ name: 'result' });
    } catch (error) {
      // log the error in the dev console if there is an issue
      console.error('Fetching data failed:', error);
      // tell the user that the request could not go through
      alert("Data could not be retrieved.")
    }
  }
}
</script>

<template>
  <div class="page">
    <BForm @submit="onSubmit" v-if="show" :novalidate="true" :validated="true" >
      <!-- input group for first dropdown -->
      <BInputGroup class="mt-3">
        <template #prepend>
          <BInputGroupText><strong class="text-primary inputGrpPre">% of: </strong></BInputGroupText>
        </template>
        <BFormSelect v-model="form.Actor" :options="actorOptions" size="sm" class="mt-lg dropStyle" />
      </BInputGroup>
      <!-- validation messages -->
      <div v-if="actorError" class="text-danger">{{ actorError }}</div>
      <div v-if="actorGood" class="text-success">{{ actorGood }}</div>
      <!-- input group for second dropdown -->
      <BInputGroup class="mt-3">
        <template #prepend>
          <BInputGroupText><strong class="text-primary inputGrpPre">That:  </strong></BInputGroupText>
        </template>
        <BFormSelect v-model="form.Condition" :options="conditionOptions" size="sm" class="mt-lg dropStyle" />
      </BInputGroup>
      <!-- validation messages -->
      <div v-if="conditionError" class="text-danger">{{ conditionError }}</div>
      <div v-if="conditionGood" class="text-success">{{ conditionGood }}</div>
      <!-- input group for optional date checkbox -->
      <BInputGroup class="mt-3" style="background: white; border-radius: 4px">
        <template #prepend>
          <BInputGroupText><strong class="text-primary inputGrpPre">Date?</strong></BInputGroupText>
        </template>
        <BFormCheckbox v-model="form.OptionalDate" size="sm" class="mt-lg checkbox" />
      </BInputGroup>
      <!-- input group for Vue-Datepicker -->
      <BInputGroup class="mt-3" v-if="form.OptionalDate">
        <template #prepend>
          <BInputGroupText><strong class="text-primary inputGrpPre">Date: </strong></BInputGroupText>
        </template>
        <datepicker v-model="form.Date" :upper-limit="to" :lower-limit="from" :clearable="true" placeholder="2023-08-15" class="dateInput">
          <template v-slot:clear="{ onClear }">
            <button type="button" @click="onClear" class="clearButton">x</button>
          </template>
        </datepicker>
      </BInputGroup>
      <!-- validation messages -->
      <div v-if="dateError" class="text-danger">{{ dateError }}</div>
      <div v-if="dateGood && form.OptionalDate && form.Date" class="text-success">{{ dateGood }}</div>
      <!-- form submit button -->
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
/* overrides any inline styles that may be passed */
/* necessary to have for production build, the build process overwrites custom styling otherwise */
.v3dp__input_wrapper {
  width: 120% !important;
  padding: 0 !important;
  margin: 0 !important;
}
.v3dp__datepicker {
  width: 40% !important;
  padding: 0 !important;
  margin: 0 !important;
}
.v3dp__clearable {
  position: absolute;
  right: 40%;
  top: 50%;
  transform: translateY(-50%) translateX(160%);
  z-index: 2;
}
.dateInput[v-model="form.Date"][style] {
  width: 100% !important;
  padding: 0 !important;
}
</style>

