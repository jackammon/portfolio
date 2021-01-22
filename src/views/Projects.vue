<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="3"> </v-col>
      <v-col cols="5">
        <div class="effect">
          <div class="title">
              <div class="title-word">Coming Soon</div>
          </div>
        </div>
      </v-col>
      <v-col cols="3"> </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

body {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #262626;
}
.title {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  perspective: 400;
  padding-left: 17px;
  font-family: 'Rubik' !important;
  font-weight: 900 !important;
  font-size: 42pt !important;
  line-height: 1.2em;
  text-transform: uppercase;
  color: black;
}

</style>