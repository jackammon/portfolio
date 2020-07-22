<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="3"> </v-col>
      <v-col cols="5">
        <div class="effect">
          <div class="title">
              <div class="title-word">Hello</div>
              <div class="title-word">I'm</div>
              <div class="title-word">Jack</div>
          </div>
        </div>
      </v-col>
      <v-col cols="3"> </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Title',

  }

</script>

<style scoped>

/* .title {
  font-family: 'Rubik' !important;
  font-weight: 900 !important;
  font-size: 42pt !important;
  padding: 16px;
}

.subtitle {
  font-family: 'Rubik' !important;
  font-weight: 700 !important;
  font-size: 24pt !important;
  padding-bottom: 16px;
} */


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
.title:before {
  content: '';
  display: block;
  position: absolute;
  height: 100%;
  width: 6px;
  background: #26ACC9;
  top: 0;
  left: -42px;
  opacity: 0;
  transform: translateX(-150px);
  animation: title-border-slide-in 0.35s ease-out forwards;
}
.title .title-word {
  opacity: 0;
  transform-origin: bottom center;
  transform: rotateX(-90deg);
}
.title .title-word:nth-child(1) {
  animation: roll-in 0.15s 0s ease-out forwards;
}
.title .title-word:nth-child(2) {
  animation: roll-in 0.15s 0.175s ease-out forwards;
}
.title .title-word:nth-child(3) {
  animation: roll-in 0.15s 0.35s ease-out forwards;
}
.title .title-word:nth-child(4) {
  animation: roll-in 0.15s 0.525s ease-out forwards;
}
@-moz-keyframes title-border-slide-in {
  0% {
    transform: translateX(-150px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@-webkit-keyframes title-border-slide-in {
  0% {
    transform: translateX(-150px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@-o-keyframes title-border-slide-in {
  0% {
    transform: translateX(-150px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes title-border-slide-in {
  0% {
    transform: translateX(-150px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@-moz-keyframes roll-in {
  0% {
    transform: rotateX(-90deg);
    opacity: 1;
  }
  100% {
    transform: rotateX(0deg);
    opacity: 1;
  }
}
@-webkit-keyframes roll-in {
  0% {
    transform: rotateX(-90deg);
    opacity: 1;
  }
  100% {
    transform: rotateX(0deg);
    opacity: 1;
  }
}
@-o-keyframes roll-in {
  0% {
    transform: rotateX(-90deg);
    opacity: 1;
  }
  100% {
    transform: rotateX(0deg);
    opacity: 1;
  }
}
@keyframes roll-in {
  0% {
    transform: rotateX(-90deg);
    opacity: 1;
  }
  100% {
    transform: rotateX(0deg);
    opacity: 1;
  }
}

.effect {

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  width: 350px;
  height: 350px;
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
  width: 350px;
  height: 350px;
  background: #FDA8CF;
  border-radius: 75px;
  z-index: -1;
  animation: 1s clockwise infinite;
}

div.effect:hover:after {
  background: #F3CE5E;
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