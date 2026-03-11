<template>
  <div v-if="page" class="p-2 md:p-6 xl:p-12">
    <h1 class="border-teal-600 font-medium text-6xl p-3 mb-3 text-900" style="border-left: 8px solid">
      {{ page.title }}
    </h1>


    <div class="text-600 text-sm mb-3">
      <span>Published </span>
      <span class="font-bold">{{ formatDate(page.meta.date) }}</span>
      <span> by </span>
      <span class="font-bold">Chris Rosser</span>
      <span> | {{ page.meta.readingTime.text }} </span>
    </div>

    <div class="mb-5">
      <span v-for="tag in page.meta.tags" class="badge badge-accent">{{ tag }}</span>
    </div>

    <div class="p-2 md:p-6">
      <div class="grid grid-cols-12 gap-6 items-start">
        <article :class="`col-span-12 ${page.body.toc.links && page.body.toc.links.length > 1 ? 'md:col-span-8' : null} p-2`">
          <ContentRenderer :value="page" />
        </article>
        <aside v-if="page.body.toc.links && page.body.toc.links.length > 1" class="hidden md:block md:col-span-4 p-2">
          <PageToc :toc="page.body.toc" />
          
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup>
import { formatDate } from '@/utils/tools.js';

const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  if (route.path.startsWith('/posts')) {
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

<style lang="scss">

h2, h3, h4, h5, h6 {
a:any-link {
  text-decoration: none;
  color: var(--text-color);
}
}
</style>