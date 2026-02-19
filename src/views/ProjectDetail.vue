<template>
  <v-container class="project-detail-page">
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <!-- Breadcrumb -->
        <div class="breadcrumb mb-4">
          <router-link to="/projects" class="breadcrumb-link">← Back to Projects</router-link>
        </div>

        <!-- Project header -->
        <div class="project-header mb-8">
          <h1 class="project-title mb-4">{{ projectTitle }}</h1>
          <p class="project-description">
            This is the project page for <strong>{{ slug }}</strong>.
            You can add project details, images, and other information here.
          </p>
        </div>

        <!-- Related Posts Section -->
        <div v-if="relatedPosts.length > 0" class="related-posts">
          <h2 class="section-title mb-4">Related Posts</h2>
          <PostCard v-for="post in relatedPosts" :key="post.slug" :post="post" />
        </div>

        <!-- No posts message -->
        <v-alert v-else type="info" variant="tonal">
          No blog posts yet for this project.
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getPostsByProject } from '@/posts/posts'
import PostCard from '@/components/PostCard.vue'

const route = useRoute()
const slug = computed(() => route.params.slug as string)

const projectTitle = computed(() => {
  return slug.value
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
})

const relatedPosts = computed(() => getPostsByProject(slug.value))
</script>

<style scoped>
.project-detail-page {
  padding-top: 2rem;
  min-height: 100vh;
}

.breadcrumb {
  font-size: 0.9rem;
  opacity: 0.7;
}

.breadcrumb-link {
  text-decoration: none;
  color: inherit;
}

.breadcrumb-link:hover {
  text-decoration: underline;
}

.project-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: left;
}

.project-description {
  font-size: 1.1rem;
  text-align: left;
  opacity: 0.8;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 700;
  text-align: left;
}
</style>
