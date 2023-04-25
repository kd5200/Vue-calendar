<template>
  <v-app>
    <v-main>
      <Calendar/>
    </v-main>
  </v-app>
</template>

<script>
import Calendar from './components/v-Calendar.vue';
// import { doc, setDoc } from "firebase/firestore"; 
import { mdiAccount, mdi } from "@mdi/js";


export default {
  name: 'App',
  components: {
    Calendar,
  
  },
  data: () => ({
    icons: {
      mdiAccount,
      mdi

    }
  }),
};
</script>