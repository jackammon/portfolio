<template>
  <v-container class="projects">
    <v-row style="padding-top: 16px;"> 
      <v-col> 
        <div class="title"> UP Movement </div> 
      </v-col> 
    </v-row>
    <v-row class="text-center">
      <v-col>
        <img src="../assets/upmovement.gif" alt="UP Movement Website" /> 
      </v-col>
    </v-row>

    <v-row> 
      <v-col> 
        <v-row class="text" style="margin-top: 16px; margin-bottom: 16px;"> Starting in the Fall of 2019 I led a team for my servant engineering project in conjunction with Pivot Group to design and build a website for the UP Movement non-profit, which seeks to end human trafficking. We built the website and admin panel in Vue.JS and the backend with C# and ASP .NET. I communicated project requirements and design ideas with our client, worked directly with a design team in an iterative development process, and integrated Stripe.JS to handle donations. After our academic year ended I was hired to finish the website. In Fall of 2020 I passed the project onto another consultant to focus on school. </v-row>
      </v-col>
    </v-row>

    <v-row> 
      <v-col> 
        <v-row class="sub-title"> 
          Technology
      </v-row>
      </v-col>
    </v-row>


    <v-row style="margin-top: 36px;"> 
      <v-col> 
        <div class="title"> Access Solutions </div> 
      </v-col> 
    </v-row>
    <v-row class="text-center">
      <v-col>

        <v-carousel
        hide-delimiter-background
        hide-delimiters
        show-arrows-on-hover
        height="auto"
        >
          <v-carousel-item
            v-for="(item,i) in items"
            eager
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
            position
            style="width: 100%;"
          ></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>

    <v-row> 
      <v-col> 
        <v-row class="text" style="margin-top: 16px; margin-bottom: 16px;"> Starting in the Fall of 2020 I led a team of six for my senior design project to develop a comprehensive scheduling system for Access Solutions. I was responsible for ensuring different phases of design and development progressed and integrated smoothly together. I gained experience giving presentations to my advisors and our client, while also leading weekly design meetings with my team and delegated tasks based on each member's strengths. We built the website in Vue.JS and Django. These are some of the mockups we designed in AdobeXD.
      </v-row>
      </v-col>
    </v-row>

    <v-row> 
      <v-col> 
        <v-row class="sub-title"> 
          Technology
      </v-row>
      <v-row style="padding-bottom: 16px;">
      </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import as1 from '../assets/as1.png';
import as2 from '../assets/as2.png';
import as3 from '../assets/as3.png';

import { ref } from 'vue';

const items = ref([
  { src: as1 },
  { src: as2 },
  { src: as3 }
]);
</script>


<style scoped>

.projects {
  max-width: 850px;
  margin: auto;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #262626;
}
.title {
  float: left;
  perspective: 400;
  font-family: 'Rubik' !important;
  font-weight: 800 !important;
  font-size: 26pt !important;
  line-height: 1.2em;
  text-transform: uppercase;
  color: black;
}

img {
  width: 100%;
  height: auto;
}

.text {
  text-align: left;
  font-size: 11pt !important;
}

.sub-title {
    font-size: 18pt !important;
    font-weight: 800 !important;
    margin-bottom: 16px;
}

.logos {
  width: auto !important;
  height: 50px!important;
  padding-right: 16px;
}

</style>