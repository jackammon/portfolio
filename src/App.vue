<template>
  <v-app id="app"
  >

   <v-btn
    fixed
    dark
    fab
    top
    right
    color="#26ACC9"
    href="https://github.com/Jinwa"
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

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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

</style>
