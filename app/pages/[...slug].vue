<template>
  <main class="relative mx-auto grid max-w-7xl gap-20 px-6 py-20 xl:grid-cols-[minmax(0,1fr)_320px] xl:px-8">
    <article v-if="page" class="max-w-3xl">
      <h1 class="max-w-4xl font-display text-6xl leading-[0.95] tracking-tight md:text-7xl">
        {{ page.title }}
      </h1>
      <div class="mt-10 h-px w-20 bg-[#8c6a43] dark:bg-[#d0b089]" />

      <!-- Subtitle -->
      <p class="mt-10 max-w-2xl text-3xl italic leading-relaxed text-muted font-display">
        {{ page.description }}
      </p>

      <!-- Meta -->
      <div class="mt-10 flex flex-wrap items-center gap-4 text-sm text-muted dark:text-[#9ca3af]">
        <span>{{ formatDate(page.date) }}</span>
        <span class="opacity-40">•</span>
        <span>{{ page.readingTime.text }}</span>
        <span class="opacity-40">•</span>
        <span>By Chris Rosser</span>
      </div>

      <div class="mb-5">
        <span v-for="tag in page.meta.tags" class="badge badge-accent">{{ tag }}</span>
      </div>

      <div class="prose prose-lg mt-16 max-w-none
          prose-p:text-[#2d3748]
          prose-p:leading-[1.9]
          prose-headings:font-serif
          prose-headings:text-[#1f2933]
          prose-strong:text-[#1f2933]
          prose-blockquote:border-[#b08968]
          prose-blockquote:text-[#3d4852]
          prose-blockquote:italic
          prose-a:text-[#8c6a43]
          prose-a:no-underline
          prose-a:transition-colors
          hover:prose-a:text-[#486357]

          dark:prose-p:text-[#d1d5db]
          dark:prose-headings:text-[#f9fafb]
          dark:prose-strong:text-[#f9fafb]
          dark:prose-blockquote:border-[#d0b089]
          dark:prose-blockquote:text-[#e5e7eb]
          dark:prose-a:text-[#d0b089]
          dark:hover:prose-a:text-[#8fb8a7]">
        <ContentRenderer :value="page" />
      </div>
    </article>
  </main>
</template>

<script setup>

const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  if (route.path.startsWith('/journal')) {
    return queryCollection('blog').path(route.path).first()
  } else {
    return queryCollection('content').path(route.path).first()
  }
})


useHead({
  title: page.value ? `${page.value.title} | Chris Rosser` : 'Chris Rosser',
  meta: [
    {
      name: 'description',
      content: page.value && page.value.description ? page.value.description : 'Chris Rosser, author, technical writer and developer living in Melbourne, Australia'
    }
  ]
})
</script>