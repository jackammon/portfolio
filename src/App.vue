<template>
  <v-app id="app">
    <v-app-bar
      absolute
      flat
      color="white"
    > 
      <v-tabs 
        background-color="transparent"
        color="black"
      >
        <v-tab class="jck-size" to="/">JCK</v-tab>
        <v-spacer style="width: 60%"></v-spacer>
        <v-tab class="btn-size" to="about">About</v-tab>
        <v-tab class="btn-size" to="projects">Experience</v-tab>
        <v-tab class="btn-size" to="/contact">Contact</v-tab>
        <v-tab class="btn-size" to="resume">Resume</v-tab>
      </v-tabs>
  </v-app-bar>

  <v-main>
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
    <v-btn
      fixed
      dark
      fab
      bottom
      right
      color="black"
      href="https://github.com/jackammon"
      target="__blank"
      class="fab"
      elevation="1"
    >
      <v-icon>mdi-github</v-icon>
    </v-btn>

  </v-app>
</template>

<script>
export default {
  mounted() {
    console.log("Hi there 👋");
    console.log("I built this website using Vue.JS");
    console.log("If you'd like to get in contact with me my information is found under the contact page");
    console.log("Have a blessed day!");
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Rubik';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#toolbar-title {
  font-family: 'Sarina';
}

.btn-size {
  font-size: 14pt !important;
  font-weight: 700 !important;
}

.jck-size {
  font-size: 20pt !important;
  font-weight: 700 !important;
}

.v-tabs-slider {
  display: none !important;
}

</style>
