// src/posts/posts.ts
export type Post = {
  slug: string
  path: string
  title: string
  date: string
  description?: string
  tags?: string[]
  project?: string
  cover?: string
  draft?: boolean
  component: any
}

export function getAllPosts(): Post[] {
  const modules = import.meta.glob('/src/posts/*.md', { eager: true, import: 'default' })
  const metaMods = import.meta.glob('/src/posts/*.md', { eager: true })

  const posts: Post[] = Object.entries(modules).map(([file, component]: [string, any]) => {
    const meta: any = (metaMods as any)[file]
    const fileName = file.split('/').pop()!
    const rawSlug = fileName.replace(/\.md$/, '')
    const slug = rawSlug.replace(/^\d{4}-\d{2}-\d{2}-/, '')
    const fm = meta.frontmatter || {}
    return {
      slug,
      path: `/blog/${slug}`,
      title: fm.title ?? slug,
      date: fm.date ?? '1970-01-01',
      description: fm.description,
      tags: fm.tags || [],
      project: fm.project,       // may be undefined for standalone posts
      cover: fm.cover,
      draft: !!fm.draft,
      component
    }
  })
  .filter(p => !(import.meta.env.PROD && p.draft))
  .sort((a, b) => b.date.localeCompare(a.date))

  return posts
}

export function getPostsByProject(projectSlug: string): Post[] {
  return getAllPosts().filter(p => p.project === projectSlug)
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find(p => p.slug === slug)
}
