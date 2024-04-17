<template>
  <v-container>
    <v-row class="text-center">
      <div class="title">
          <div class="title-word" ref="textElement"></div>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

export default {
  setup() {
    const textElement = ref(null);
    const texts = [
      "Hello,<br>I'm Jack Ammon",
      "Welcome to my slice of the internet",
      "I build cool things",
      "I build things designed to last",
      "I build things that help people",
      "I build things that bring good into the world",
      "jck.codes",
    ];
    let currentText = 0;

    function animateText() {
      if (currentText >= texts.length) currentText = 0; // Loop back to the first text
      gsap.to(textElement.value, {
        duration: 2,
        text: texts[currentText],
        onComplete: () => {
          // Wait some time before starting the next animation
          gsap.to(textElement.value, { delay: 2.5, onComplete: animateText });
        }
      });
      currentText++;
    }

    onMounted(() => {
      gsap.registerPlugin(TextPlugin);
      animateText(); // Start the animation loop
    });

    return {
      textElement
    };
  },
}
</script>

<style scoped>

body {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  height: 100vh; /* ensures that the body takes full viewport height */
}

.title {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Rubik', sans-serif; /* ensure fallback is specified */
  font-weight: 700;
  font-size: 5.75em; /* Default size for large screens */
  line-height: 1.2em;
  color: black;
  text-align: left;
}

/* Responsive adjustments for tablets */
@media (max-width: 768px) {
  .title {
    font-size: 4em; /* smaller font size for tablets */
  }
}

/* Responsive adjustments for mobile phones */
@media (max-width: 480px) {
  .title {
    font-size: 4em; /* even smaller font size for mobile phones */
    top: 40%; /* adjust position slightly for better viewing */
    left: 50%;
    transform: translate(-50%, -40%);
  }
}

</style>