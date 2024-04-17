<template>
  <v-app>
    <v-app-bar
      absolute
      flat
      color="white"
      class="nav"
    >
      <v-tabs
        background-color="transparent"
        color="black"
        grow
        hide-slider
        v-model="currentTab"
      >
        <v-tab class="jck-size" to="/" :value="1" :class="tabClass(1)">JCK</v-tab>
        <v-spacer style="width: 70%"></v-spacer>
        <v-tab class="btn-size hidden-sm-and-down" to="/about" :value="2" :class="tabClass(2)">About</v-tab>
        <v-tab class="btn-size hidden-sm-and-down" to="/contact" :value="4" :class="tabClass(4)">Contact</v-tab>
        <v-tab class="btn-size hidden-sm-and-down" to="/resume" :value="5" :class="tabClass(5)">Resume</v-tab>
      </v-tabs>
      <v-btn icon class="hidden-md-and-up" @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Navigation Drawer -->
    <v-navigation-drawer v-model="drawer" location="right" app>
      <v-list>
        <v-list-item v-for="(item, i) in menuItems" :key="i" link :href="item.link">
          <v-list-item-content>
            <v-list-item-title class="text-left btn-size">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="pa-0 fill-height">
      <v-container class="fill-height" fluid style="padding-top: 56px;">
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <router-view/>  
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-btn
      icon
      variant="text"
      size="large"
      color="black"
      href="http://www.linkedin.com/in/jackammon"
      target="_blank"
      class="ma-2"
      location="bottom end"
      position="fixed"
    >
      <v-icon size="large">mdi-linkedin</v-icon>
    </v-btn>

  </v-app>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const currentTab = ref(1);
const drawer = ref(false);

const menuItems = [
  { title: 'Home', link: '/' },
  { title: 'About', link: '/about' },
  { title: 'Contact', link: '/contact' },
  { title: 'Resume', link: '/resume' }
];

function tabClass(value) {
  return currentTab.value === value ? 'active-tab' : 'inactive-tab';
}

onMounted(() => {
  console.log("Hi there 👋");
  console.log("I built this website using Vue3, Vuetify, Vite, and GSAP");
  console.log("If you'd like to get in contact with me, my information is found under the contact page");
  console.log("Thanks for stopping by!");
});

</script>

<style lang="scss">
#app {
  font-family: 'Rubik', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

.btn-size {
  font-size: 14pt !important;
  font-weight: 700 !important;
  letter-spacing: .5pt !important;
}

.jck-size {
  font-size: 20pt !important;
  font-weight: 700 !important;
  font-family: 'Rubik Mono One';
  letter-spacing: -2.755pt !important;
}

@media (max-width: 600px) {
  .btn-size {
    font-size: 12pt !important;
  }

  .jck-size {
    text-align: left !important;
    justify-content: flex-start !important;
  }
}

.active-tab {
  color: black !important; /* Active tab color */
}

.inactive-tab {
  color: grey !important; /* Inactive tab color */
}

</style>
