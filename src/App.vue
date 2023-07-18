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

<!-- as a reminder, if you run into the issue of events not showing on your
calendar. Go directly into firebase database and manually enter the end date into the collect that recorded
data abnormally for a quick fix -->