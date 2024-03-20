import {defineStore} from 'pinia';
import axios from "axios";
import UserAdapter from "./adapters/UserAdapter";

export const useApiStore = defineStore('api', {
  state: () => ({
    apiData: [new UserAdapter()],
  }),
  actions: {
    async setApiData(APIurl) {
      try {
        const response = await axios.get(APIurl, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        this.apiData = response.data; // assign data to the state
      } catch (error) {
        console.error('Error fetching data:', error);
        this.apiData = []; // reset the data
      }
    },
  },
});