// import pinia for state management, axios for get requests, and DB adapter to provide valid fields for data
import {defineStore} from 'pinia';
import axios from "axios";
import DatabaseAdapter from "./adapters/DatabaseAdapter.js";

export const useApiStore = defineStore('api', {
  state: () => ({ apiData: [new DatabaseAdapter()] }),
  actions: {
    async setApiData(APIurl) {
      try {
        // set result of endpoint call to response variable in order to pass to next page from state
        const response = await axios.get(APIurl, {
          headers: { 'Content-Type': 'application/json'},
        });
        // assign data to the state
        this.apiData = response.data;
      } catch (error) {
        // log the error to the dev console
        console.error('Error fetching data:', error);
        // reset the data
        this.apiData = [];
      }
    },
  },
});