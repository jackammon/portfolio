<template>
    <div>
    <section> 
      <div class="effect-wrapper">
        <div class="effect">
          <div class="head">
              <div class="head-word">Hello</div>
              <div class="head-word">I'm</div>
              <div class="head-word">Jack</div>
          </div>
        </div>
      </div>
    </section>

     <section id="s1" style="background-color: red;">
         <h1 id="c1" style="color: white;"> Projects </h1>
         
     </section>

     <section id="s2" style="background-color: blue;">
         <h1 id="c2" style="color: white;"> Project A </h1>
     </section>

     <section id="s3" style="background-color: green;">
         <h1 id="c3" style="color: white;"> Project B  </h1>
     </section>
  </div>
</template>


<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'
// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    this.scrollAnimation();
  },
  methods: {
    scrollAnimation() {
    gsap.to('#s1', {
        scrollTrigger: {
            trigger: "#s1",
            start: "top center", 
            end: "+=300",
            pin: "#c1"
        }
        });
        

    gsap.to('#s2', {
        scrollTrigger: {
            trigger: "#s2",
            start: "top center", 
            end: "+=300", // 200px past the start 
            pin: "#c2"
        }
        });

    gsap.to('#s3', {
        scrollTrigger: {
            trigger: "#s3",
            start: "top center", 
            end: "+=300", // 200px past the start 
            pin: "#c3"
        }
        });
        
    },
  }
};
</script>

<style>
section {
    height: 100vh;
    font-family: 'Rubik' !important;
    font-size: 20pt !important;
}

.head {
  /* position: fixed; */
  top: 50%;
  left: 50%;
  /* transform: translate(-50%, -50%); */
  perspective: 400;
  padding-left: 17px;
  font-family: 'Rubik' !important;
  font-weight: 900 !important;
  font-size: 40pt !important;
  line-height: 1.2em;
  text-transform: uppercase;
  color: black;
}
.head:before {
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
  animation: head-border-slide-in 0.35s ease-out forwards;
}
.head .head-word {
  opacity: 0;
  transform-origin: bottom center;
  transform: rotateX(-90deg);
}
.head .head-word:nth-child(1) {
  animation: roll-in 0.15s 0s ease-out forwards;
}
.head .head-word:nth-child(2) {
  animation: roll-in 0.15s 0.175s ease-out forwards;
}
.head .head-word:nth-child(3) {
  animation: roll-in 0.15s 0.35s ease-out forwards;
}
.head .head-word:nth-child(4) {
  animation: roll-in 0.15s 0.525s ease-out forwards;
}
@-moz-keyframes head-border-slide-in {
  0% {
    transform: translateX(-150px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@-webkit-keyframes head-border-slide-in {
  0% {
    transform: translateX(-150px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@-o-keyframes head-border-slide-in {
  0% {
    transform: translateX(-150px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes head-border-slide-in {
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

.effect-wrapper {
  position: relative;
  top: 45vh;
  left: 50%;
  transform: translate(-50%, -50%);
}

.effect {
  /* position: fixed; */
  /* top: 50%;
  left: 50%; */
  transform: translate(0%, 0%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  width: 350px;
  height: 350px;
  background: white;
  border-radius: 75px;
  font-family: 'Montserrat', sans-serif;
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