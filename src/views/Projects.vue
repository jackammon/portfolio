<template>
  <v-container class="projects-page">
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <h1 class="text-left mb-2">Projects</h1>
        <p class="text-left subtitle mb-6">
          A collection of my projects and work.
        </p>

        <!-- Project Cards -->
        <section>
          <v-card
            v-for="project in projects"
            :key="project.slug"
            class="project-card mb-6"
            :to="`/projects/${project.slug}`"
            variant="outlined"
            hover
          >
            <v-card-title class="text-left">
              {{ project.title }}
            </v-card-title>
            <v-card-text class="text-left">
              {{ project.description }}
            </v-card-text>
            <v-card-actions v-if="project.postCount > 0">
              <v-chip size="small">
                {{ project.postCount }} post{{ project.postCount > 1 ? 's' : '' }}
              </v-chip>
            </v-card-actions>
          </v-card>
        </section>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed } from 'vue'
import { getAllPosts } from '@/posts/posts'

const allPosts = getAllPosts()

// Extract unique projects from posts
const projects = computed(() => {
  const projectMap = new Map()

  allPosts.forEach(post => {
    if (post.project) {
      if (!projectMap.has(post.project)) {
        projectMap.set(post.project, {
          slug: post.project,
          title: post.project
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' '),
          description: `View all posts related to ${post.project}.`,
          postCount: 0
        })
      }
      const project = projectMap.get(post.project)
      project.postCount++
    }
  })

  return Array.from(projectMap.values())
})
</script>

<style scoped>
.projects-page {
  padding-top: 2rem;
  min-height: 100vh;
  padding-left: 0px !important;
}

.subtitle {
  opacity: 0.7;
  font-size: 1.1rem;
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
}

.project-card {
  transition: transform 0.2s;
}

.project-card:hover {
  transform: translateY(-2px);
}
</style>