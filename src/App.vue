<template>
  <v-app id="app">
    <v-app-bar
      absolute
      flat
      color="rgba(0, 0, 0, 0.0)"
      class="nav"
    >
      <v-tabs
        background-color="transparent"
        color="black"
        grow
        hide-slider
        v-model="currentTab"

      >
        <v-tab class="jck-size logo" to="/" @click="drawer = false" :value="1" :class="tabClass(1)" :style="!drawer ? 'color: black' : 'color: white !important'">JCK</v-tab>
        <v-spacer style="width: 70%"></v-spacer>
        <v-tab class="btn-size hidden-sm-and-down" to="/about" :value="2" :class="tabClass(2)">About</v-tab>
        <v-tab class="btn-size hidden-sm-and-down" to="/contact" :value="4" :class="tabClass(4)">Contact</v-tab>
        <v-tab class="btn-size hidden-sm-and-down" to="/resume" :value="5" :class="tabClass(5)">Resume</v-tab>
      </v-tabs>

      <v-btn icon variant="plain" class="hidden-md-and-up" @click="drawer = !drawer" :color="!drawer ? 'black' : 'white'">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <NavDrawer :isOpen="drawer" @update:isOpen="drawer = $event" />

    <v-main class="pa-0 fill-height">
      <v-container class="fill-height app-padding" fluid style="padding-top: 56px;">
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <router-view/>  
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-btn
      icon
      variant="plain"
      size="large"
      :color="!drawer ? 'black' : 'white'"
      href="http://www.linkedin.com/in/jackammon"
      target="_blank"
      class="ma-2"
      location="bottom end"
      position="fixed"
      style="z-index: 9999 !important;"
    >
      <v-icon size="large">mdi-linkedin</v-icon>
    </v-btn>

  </v-app>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import NavDrawer from './components/NavDrawer.vue';

const currentTab = ref(1);
const drawer = ref(false);
const isMobile = computed(() => window.matchMedia("(max-width: 960px)").matches);

const menuItems = [
  { title: 'Home', link: '/' },
  { title: 'About', link: '/about' },
  { title: 'Contact', link: '/contact' },
  { title: 'Resume', link: '/resume' }
];

function tabClass(value) {
  if (!isMobile.value) {
    return currentTab.value === value ? 'active-tab' : 'inactive-tab';
  }
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
  color: #000;
  // background-color: #fffdf9 !important;
}

.btn-size {
  font-size: 14pt !important;
  font-weight: 700 !important;
  letter-spacing: -.02em !important;
}

.jck-size {
  font-size: 20pt !important;
  font-weight: 700 !important;
  font-family: 'Rubik Mono One';
  letter-spacing: -2.755pt !important;
}

.logo {
  text-align: left;
  justify-content: start !important;
  position: absolute;
  padding-left: 21px !important;
}

.app-padding {
  padding-left: 25px !important;
  padding-right: 25px !important;
}

@media (min-width: 960px) {
  .active-tab {
    color: black !important;
  }

  .inactive-tab {
    color: grey !important;
  }
}

@media (max-width: 960px) {
  .btn-size {
    font-size: 16pt !important;
  }

  .jck-size {
    text-align: left !important;
    justify-content: flex-start !important;
  }

  .inactive-tab {
    color: black !important;
  }
}

</style>
