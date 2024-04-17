<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="3"> </v-col>
      <v-col cols="5">
        <div class="effect">
          <div class="contact">
              <div>You can reach me at </div>
              <div>&#x6a;&#x63;&#x61;&#x72;&#x75;&#x6e;&#x6e;&#x65;&#x72;&#x40;&#x67;&#x6d;&#x61;&#x69;&#x6c;&#x2e;&#x63;&#x6f;&#x6d;</div>
              <div>&#x35;&#x30;&#x39;&#x2e;&#x38;&#x30;&#x38;&#x2e;&#x31;&#x32;&#x31;&#x39;</div>
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
.contact {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-left: 17px;
  font-family: 'Rubik' !important;
  font-weight: 800 !important;
  font-size: 28pt;
  line-height: 1.2em;
  text-transform: uppercase;
  color: black;
}

/* Responsive adjustments for tablets */
@media (max-width: 768px) {
  .contact {
    font-size: 18pt; /* smaller font size for tablets */
  }
}

/* Responsive adjustments for mobile phones */
@media (max-width: 480px) {
  .title {
    font-size: 8pt; /* even smaller font size for mobile phones */
    top: 40%; /* adjust position slightly for better viewing */
    left: 50%;
    transform: translate(-50%, -40%);
  }
}

</style>