<template>
  <v-container v-if="post" class="blog-post-page">
    <v-row justify="center">
      <v-col cols="12" md="8" lg="7">
        <!-- Breadcrumb -->
        <div class="breadcrumb mb-4">
          <router-link to="/entries" class="breadcrumb-link">← Back to Entries</router-link>
          <span v-if="post.project" class="project-breadcrumb">
            •
            <router-link :to="`/projects/${post.project}`" class="breadcrumb-link">
              {{ post.project }}
            </router-link>
          </span>
        </div>

        <!-- Cover image -->
        <v-img
          v-if="post.cover"
          :src="post.cover"
          class="mb-6"
          cover
          max-height="400"
        />

        <!-- Post metadata -->
        <div class="post-header mb-6">
          <h1 class="post-title mb-2">{{ post.title }}</h1>
          <PostMeta :post="post" />
        </div>

        <!-- Markdown content -->
        <article class="markdown-content">
          <component :is="post.component" />
        </article>

        <!-- Tags -->
        <div v-if="post.tags && post.tags.length > 0" class="tags mt-8">
          <v-chip
            v-for="tag in post.tags"
            :key="tag"
            size="small"
            class="mr-2"
            :to="`/entries?tag=${tag}`"
          >
            {{ tag }}
          </v-chip>
        </div>

        <!-- Related posts link (if project) -->
        <div v-if="post.project" class="related-posts-link mt-8">
          <v-btn
            :to="`/entries?project=${post.project}`"
            variant="outlined"
          >
            View all {{ post.project }} posts
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>

  <!-- Not found -->
  <v-container v-else>
    <v-row justify="center">
      <v-col cols="12" md="8" class="text-center">
        <h1>Post Not Found</h1>
        <p>The post you're looking for doesn't exist.</p>
        <v-btn to="/entries" variant="outlined" class="mt-4">
          Back to Entries
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getPostBySlug } from '@/posts/posts'
import PostMeta from '@/components/PostMeta.vue'

const route = useRoute()
const slug = computed(() => route.params.slug as string)
const post = computed(() => getPostBySlug(slug.value))
</script>

<style scoped>
.blog-post-page {
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

.project-breadcrumb {
  margin-left: 0.5em;
}

.post-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: left;
}

.markdown-content {
  text-align: left;
  line-height: 1.8;
  font-size: 1.1rem;
}

.markdown-content :deep(h1) {
  font-size: 2rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.markdown-content :deep(h2) {
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.markdown-content :deep(h3) {
  font-size: 1.25rem;
  font-weight: 700;
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
}

.markdown-content :deep(p) {
  margin-bottom: 1rem;
}

.markdown-content :deep(ul),
.markdown-content :deep(ol) {
  margin-bottom: 1rem;
  padding-left: 2rem;
}

.markdown-content :deep(li) {
  margin-bottom: 0.5rem;
}

.markdown-content :deep(code) {
  background-color: rgba(0, 0, 0, 0.05);
  padding: 0.2em 0.4em;
  border-radius: 3px;
  font-family: monospace;
}

.markdown-content :deep(pre) {
  background-color: rgba(0, 0, 0, 0.05);
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
  margin-bottom: 1rem;
}

.markdown-content :deep(pre code) {
  background-color: transparent;
  padding: 0;
}

.markdown-content :deep(a) {
  color: #1072fa;
  text-decoration: none;
}

.markdown-content :deep(a:hover) {
  text-decoration: underline;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.related-posts-link {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
