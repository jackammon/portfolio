<template>
  <v-card
    class="post-card mb-6"
    :to="post.path"
    variant="outlined"
    hover
  >
    <v-img
      v-if="post.cover"
      :src="post.cover"
      height="200"
      cover
    />
    <v-card-title class="text-left">
      {{ post.title }}
    </v-card-title>
    <v-card-subtitle class="text-left">
      <PostMeta :post="post" />
    </v-card-subtitle>
    <v-card-text v-if="post.description" class="text-left">
      {{ post.description }}
    </v-card-text>
    <v-card-actions v-if="post.tags && post.tags.length > 0">
      <v-chip
        v-for="tag in post.tags"
        :key="tag"
        size="small"
        class="mr-2"
      >
        {{ tag }}
      </v-chip>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import type { Post } from '@/posts/posts'
import PostMeta from './PostMeta.vue'

defineProps<{
  post: Post
}>()
</script>

<style scoped>
.post-card {
  transition: transform 0.2s;
}

.post-card:hover {
  transform: translateY(-2px);
}
</style>
