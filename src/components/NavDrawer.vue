<template>
  <div class="nav-drawer" :class="{'is-open': isOpen}">
    <v-list style="background-color: #1072fa; color: white; margin-top: 84px;">
        <v-list-item v-for="(item, i) in menuItems" :key="i" link :href="item.link">
          <v-list-item-content>
            <v-list-item-title :color="isOpen ? '#1072fa' : 'white'" class="text-left tab" >{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const menuItems = [
  { title: 'About', link: '/about' },
  { title: 'Contact', link: '/contact' },
  { title: 'Resume', link: '/resume' }
];

const props = defineProps({
  isOpen: Boolean
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
  transform: translateY(-100%);
  transition: transform 0.3s;
  z-index: 999;
}
.nav-drawer.is-open {
  transform: translateY(0%);
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
