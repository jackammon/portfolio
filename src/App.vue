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
        <v-tab class="btn-size" to="/about" :value="2" :class="tabClass(2)">About</v-tab>
        <!-- <v-tab class="btn-size" to="/projects" :value="3" :class="tabClass(3)">Experience</v-tab> -->
        <v-tab class="btn-size" to="/contact" :value="4" :class="tabClass(4)">Contact</v-tab>
        <v-tab class="btn-size" to="/resume" :value="5" :class="tabClass(5)">Resume</v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main class="pa-0 fill-height">
      <v-container
        class="fill-height"
        fluid
        style="padding-top: 56px; max-width: 100%"
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center">
            <router-view/>  
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- FAB -->
    <!-- <v-btn
      icon
      variant="text"
      color="black"
      href="https://github.com/jackammon"
      target="_blank"
      class="mb-12 mr-2"
      location="bottom end"
      position="fixed"
    >
      <v-icon>mdi-github</v-icon>
    </v-btn> -->

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

function tabClass(value) {
  return currentTab.value === value ? 'active-tab' : 'inactive-tab';
}

onMounted(() => {
  console.log("Hi there 👋");
  console.log("I built this website using Vue.js");
  console.log("If you'd like to get in contact with me my information is found under the contact page");
  console.log("Have a blessed day!");
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

.active-tab {
  color: black !important; /* Active tab color */
}

.inactive-tab {
  color: grey !important; /* Inactive tab color */
}

</style>
