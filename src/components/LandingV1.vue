<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="3"> </v-col>
      <v-col cols="5">
        <div class="effect">
          <div class="title">
              <div class="title-word">Hello I'm Jack</div>
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
  font-weight: 800 !important;
  font-size: 36pt !important;
  line-height: 1.2em;
  text-transform: uppercase;
  color: black;
  letter-spacing: .0125em !important;
}

.effect:hover .title { color: white; }

.effect {

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  width: 400px;
  height: 400px;
  background: white;
  border-radius: 75px;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: lighter;
  letter-spacing: 2px;
  transition: 1s box-shadow;
}

div.effect:hover {
  box-shadow: 0 5px 35px 0px rgba(0,0,0,.1);
}

div.effect:hover:before, div.effect:hover:after {
  display: block;
  content: '';
  position: absolute;
  width: 400px;
  height: 400px;
  background: #0197F6;
  border-radius: 75px;
  z-index: -1;
  animation: 1s clockwise infinite;
}

div.effect:hover:after {
  background: #00db96;
  animation: 2s counterclockwise infinite;
}

@keyframes clockwise {
  0% {
    top: -5px;
    left: 0;
  }
  12% {
    top: -2px;
    left: 2px;
  }
  25% {
    top: 0;
    left: 5px;    
  }
  37% {
    top: 2px;
    left: 2px;
  }
  50% {
    top: 5px;
    left: 0;    
  }
  62% {
    top: 2px;
    left: -2px;
  }
  75% {
    top: 0;
    left: -5px;
  }
  87% {
    top: -2px;
    left: -2px;
  }
  100% {
    top: -5px;
    left: 0;    
  }
}

@keyframes counterclockwise {
  0% {
    top: -5px;
    right: 0;
  }
  12% {
    top: -2px;
    right: 2px;
  }
  25% {
    top: 0;
    right: 5px;    
  }
  37% {
    top: 2px;
    right: 2px;
  }
  50% {
    top: 5px;
    right: 0;    
  }
  62% {
    top: 2px;
    right: -2px;
  }
  75% {
    top: 0;
    right: -5px;
  }
  87% {
    top: -2px;
    right: -2px;
  }
  100% {
    top: -5px;
    right: 0;    
  }
}

</style>