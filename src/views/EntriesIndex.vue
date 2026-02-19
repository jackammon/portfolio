<template>
  <v-container class="entries-page">
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <h1 class="text-left mb-2">Entries</h1>
        <p class="text-left subtitle mb-6">
          All posts across all projects, newest first.
        </p>

        <!-- Filter chips -->
        <div v-if="currentProject || currentTag" class="filters mb-4">
          <v-chip
            v-if="currentProject"
            closable
            @click:close="clearProjectFilter"
            class="mr-2"
          >
            Project: {{ currentProject }}
          </v-chip>
          <v-chip
            v-if="currentTag"
            closable
            @click:close="clearTagFilter"
            class="mr-2"
          >
            Tag: {{ currentTag }}
          </v-chip>
        </div>

        <!-- Posts list -->
        <section v-if="filtered.length > 0">
          <PostCard v-for="p in filtered" :key="p.slug" :post="p" />
        </section>

        <!-- Empty state -->
        <v-alert v-else type="info" variant="tonal" class="mt-4">
          No posts found matching the current filters.
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getAllPosts, type Post } from '@/posts/posts'
import PostCard from '@/components/PostCard.vue'

const route = useRoute()
const router = useRouter()
const all = getAllPosts()

const currentProject = computed(() => (route.query.project as string | undefined)?.trim())
const currentTag = computed(() => (route.query.tag as string | undefined)?.trim())

const filtered = computed<Post[]>(() => {
  return all.filter(p => {
    const okProject = currentProject.value ? p.project === currentProject.value : true
    const okTag = currentTag.value ? (p.tags ?? []).includes(currentTag.value) : true
    return okProject && okTag
  })
})

function clearProjectFilter() {
  const query = { ...route.query }
  delete query.project
  router.push({ query })
}

function clearTagFilter() {
  const query = { ...route.query }
  delete query.tag
  router.push({ query })
}
</script>

<style scoped>
.entries-page {
  padding-top: 2rem;
  min-height: 100vh;
}

.subtitle {
  opacity: 0.7;
  font-size: 1.1rem;
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
</style>
