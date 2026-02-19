<template>
  <span class="post-meta">
    <span class="date">{{ formattedDate }}</span>
    <span v-if="post.project" class="project-link">
      •
      <router-link :to="`/projects/${post.project}`" class="project-name">
        {{ post.project }}
      </router-link>
    </span>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Post } from '@/posts/posts'

const props = defineProps<{
  post: Post
}>()

const formattedDate = computed(() => {
  const date = new Date(props.post.date)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})
</script>

<style scoped>
.post-meta {
  opacity: 0.7;
  font-size: 0.9em;
}

.project-link {
  margin-left: 0.5em;
}

.project-name {
  text-decoration: none;
  color: inherit;
  font-weight: 500;
}

.project-name:hover {
  text-decoration: underline;
}
</style>
