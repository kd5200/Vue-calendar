<template>
  <v-app>
    <v-main>
      <Calendar/>
    </v-main>
  </v-app>
</template>

<script>
import Calendar from './components/v-Calendar.vue';

export default {
  name: 'App',
  components: {
    Calendar,
  },
  data: () => ({
    //
  }),
};
</script>