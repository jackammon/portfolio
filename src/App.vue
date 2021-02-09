<template>
  <v-app id="app"
  >
  <v-app-bar
  absolute
  flat
  color="white"> 

    <v-btn
    text
    large
    class="btn-size"
    color="black"
    to="/"
    >
      Jack Ammon
    </v-btn>

      <v-btn
      color="black"
      large
      text
      class="btn-size"
      to="resume">
        Resume
      </v-btn>

      <v-btn
      color="black"
      large
      text
      class="btn-size"
      to="projects">
        Projects
      </v-btn>

      <v-btn 
    text
    large
    class="btn-size"
    color="black"
    to="/contact">
        Contact
      </v-btn>

  </v-app-bar>
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
    <v-main>
      <v-container
        class="fill-height"
        fluid
        style="padding-top: 56px;"
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
  </v-app>
</template>

<script>
export default {
  mounted() {
    console.log("hi there 👋");
    console.log("I built this website using Vue.JS");
    console.log("If you'd like to get in contact with me my information is on under the contact tab");
    console.log("Have a blessed day!");
  }
}
</script>

<style lang="scss" scoped>
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
  font-size: 16pt !important;
  font-weight: 700 !important;
}

</style>
