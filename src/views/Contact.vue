<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="3"> </v-col>
      <v-col cols="5">
        <div class="effect">
          <div class="title">
              <div class="title-word">You can reach me at </div>
              <div class="title-word">&#x6a;&#x63;&#x61;&#x72;&#x75;&#x6e;&#x6e;&#x65;&#x72;&#x40;&#x67;&#x6d;&#x61;&#x69;&#x6c;&#x2e;&#x63;&#x6f;&#x6d;</div>
              <div class="title-word">&#x35;&#x30;&#x39;&#x2e;&#x38;&#x30;&#x38;&#x2e;&#x31;&#x32;&#x31;&#x39;</div>
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
  font-size: 32pt !important;
  line-height: 1.2em;
  text-transform: uppercase;
  color: black;
}

</style>