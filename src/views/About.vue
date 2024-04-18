<template>
  <v-containter>
    <v-row class="ma-2">
      <v-col :cols="mdAndUp ? 5 : 12"> 
        <img src="../assets/avatar-full.jpg" alt="avatar" /> 
      </v-col>
      <v-col :cols="mdAndUp ? 5 : 12"> 
        <h1 class="text-left">Jack Ammon</h1> 
        <h2 class="text-left mb-10">Product Focused Software Engineer</h2>
      </v-col> 
    </v-row>
  </v-containter>
</template>

<script>
  import { useDisplay } from 'vuetify'

    export default {
    setup () {
        const { mdAndUp } = useDisplay()

        return { mdAndUp }
    }
  }
</script>

<style scoped>
img {
  width: 100%;
  height: auto;
}

h1 {
  font-size: 8vw;
  line-height: 90%;
  letter-spacing: -.02em;
  margin-bottom: 2vw;
}

h2 {
  font-style: normal;
  font-size: 2.5vw;
  line-height: 110%;
  letter-spacing: .02em;
  text-transform: uppercase;
  font-weight: 500;
}
</style>