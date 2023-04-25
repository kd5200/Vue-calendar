import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import { initializeApp } from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/firestore';
// import { initializeFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc } from 'firebase/firestore';
import 'material-design-icons-iconfont/dist/material-design-icons.css'

// import { getAnalytics } from "firebase/compat/analytics";


Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyAZwDveyhRXNWtBDPgwltpNTlgWt66eya4",
  authDomain: "vue-project-6839e.firebaseapp.com",
  projectId: "vue-project-6839e",
  storageBucket: "vue-project-6839e.appspot.com",
  messagingSenderId: "398079209535",
  appId: "1:398079209535:web:09332b056ac23e083d088a"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
// const calEvents = doc(db, 'calEvents' )

export { analytics, db, doc };

// export { db }

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
