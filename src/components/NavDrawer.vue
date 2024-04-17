<template>
  <div class="nav-drawer" ref="drawer">
    <v-list style="background-color: #1072fa; color: white; margin-top: 84px;">
        <v-list-item v-for="(item, i) in menuItems" :key="i" @click="toLink(item.link)">
          <v-list-item-title :color="isOpen ? '#1072fa' : 'white'" class="text-left tab">{{ item.title }}</v-list-item-title>
        </v-list-item>
    </v-list>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import gsap from 'gsap';
import { useRouter } from 'vue-router'

const router = useRouter()
const drawer = ref(null);
const props = defineProps({
  isOpen: Boolean
});

const menuItems = [
  { title: 'About', link: '/about' },
  { title: 'Contact', link: '/contact' },
  { title: 'Resume', link: '/resume' }
];

function toLink(link) {
  router.push(link);
  props.isOpen = false;
}

onMounted(() => {
  gsap.set(drawer.value, { y: '-100%' });
});

watch(() => props.isOpen, (newValue) => {
  if (newValue) {
    gsap.to(drawer.value, { y: '0%', duration: 0.66, ease: 'power2.inOut' });
  } else {
    gsap.to(drawer.value, { y: '-100%', duration: 0.66, ease: 'power2.in' });
  }
});
</script>

<style>
.nav-drawer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1072fa;
  z-index: 999;
}
ul {
  list-style: none;
  padding: 20px;
  margin: 0;
}
li a {
  color: white;
  text-decoration: none;
}
.tab {
  height: 64px !important;
  font-size: 28pt !important;
  font-weight: 700 !important;
  letter-spacing: .5pt !important;
  padding-top: 20px !important;
}
</style>
