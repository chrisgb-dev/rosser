<template>

<div
    class="relative min-h-screen overflow-hidden bg-[#f6f1e7] text-[#1f2933] dark:bg-[#111827] dark:text-[#e5e7eb]"
  >
    <!-- Paper texture -->

    <!-- Decorative vertical line -->
    <!-- <div
      class="pointer-events-none absolute right-[28%] top-0 hidden h-full w-px bg-[#d8cfbf] dark:bg-white/10 xl:block"
    /> -->

    <!-- Main layout -->
    <main
      v-if="page"
      class="relative mx-auto grid max-w-7xl gap-20 px-6 py-20 xl:grid-cols-[minmax(0,1fr)_320px] xl:px-8"
    >
      <!-- Article -->
      <article  class="max-w-3xl">
        <!-- Category -->
        <p
          class="mb-6 text-sm uppercase tracking-[0.25em] text-[#8c6a43] dark:text-[#d0b089]"
        >
          {{ page.category || 'Journal'  }}
        </p>

        <!-- Title -->
        <h1
          class="max-w-4xl font-display text-6xl leading-[0.95] tracking-tight md:text-7xl"
        >
          {{ page.title }}
        </h1>

        <!-- Accent line -->
        <div
          class="mt-10 h-px w-20 bg-[#8c6a43] dark:bg-[#d0b089]"
        />

        <!-- Subtitle -->
        <p
          class="mt-10 max-w-2xl text-3xl italic leading-relaxed text-muted font-display"
        >
          {{ page.description }}
        </p>

        <!-- Meta -->
        <div
          class="mt-10 flex flex-wrap items-center gap-4 text-sm text-muted dark:text-[#9ca3af]"
        >
          <span>{{ formatDate(page.date) }}</span>
          <span class="opacity-40">•</span>
          <span>{{ page.readingTime.text }}</span>
          <span class="opacity-40">•</span>
          <span>By Chris Rosser</span>
        </div>

        <!-- Hero image -->
        <figure class="mt-14" v-if="page.cover">
          <img
            :src="page.cover"
            alt=""
            class="aspect-16/10 w-full rounded-4xl object-cover"
          />

          <figcaption v-if="page.coverCaption"
            class="mt-4 text-sm italic text-muted dark:text-[#9ca3af]"
          >
            {{ page.coverCaption }}
          </figcaption>
        </figure>

        <!-- Content -->
        <div
          class="prose prose-lg mt-16 max-w-none
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
          dark:hover:prose-a:text-[#8fb8a7]"
        >
          <ContentRenderer :value="page" />
        </div>

        <!-- Divider -->
        <div class="my-16 flex justify-center">
          <div
            class="h-px w-24 bg-[#d8cfbf] dark:bg-white/10"
          />
        </div>

        <!-- Tags -->
        <div class="flex flex-wrap items-center gap-3">
          <span
            class="mr-3 text-xs uppercase tracking-[0.2em] text-[#8c6a43] dark:text-[#d0b089]"
          >
            Tags
          </span>

          <span
            v-for="tag in page.tags"
            :key="tag"
            class="rounded-full border border-[#d8cfbf] px-4 py-2 text-sm text-muted transition-colors hover:border-[#b08968] hover:text-[#1f2933] dark:border-white/10 dark:text-[#9ca3af] dark:hover:border-[#d0b089] dark:hover:text-white uppercase"
          >
            {{ tag }}
          </span>
        </div>

        <AuthorCard />
      </article>

      <!-- Sidebar -->
      <aside class="space-y-14">
        <!-- TOC -->
        <div v-if="page.body.toc && page.body.toc.links.length >= 1" class="hidden xl:block">
          <h3
            class="mb-8 text-sm uppercase tracking-[0.24em] text-[#8c6a43] dark:text-[#d0b089]"
          >
            On This Page
          </h3>


          <nav class="space-y-5 text-lg">
            <a
              v-for="item in page.body.toc.links"
              :key="item.id"
              :href="`#${item.id}`"
              class="block transition-colors hover:text-[#486357] dark:hover:text-[#8fb8a7]"
            >
              {{ item.text }}
            </a>
          </nav>
        </div>

        <!-- Related -->
        <div>
          <h3
            class="mb-8 text-sm uppercase tracking-[0.24em] text-[#8c6a43] dark:text-[#d0b089]"
          >
            Related Entries
          </h3>

          <div class="space-y-8">
            <article
              v-for="post in relatedPosts"
              :key="post.title"
              
            >
            <NuxtLink
              class="group flex gap-5"
              :to="post.path">
              <img
                :src="post.cover || '/images/yannick-pulver-hopX_jpVtRM-unsplash.jpg'"
                :alt="post.title"
                class="h-28 w-28 rounded-2xl object-cover"
              />

              <div>
                <p
                  class="mb-3 text-xs uppercase tracking-[0.18em] text-[#8c6a43] dark:text-[#d0b089]"
                >
                  {{ post.category }}
                </p>

                <h4
                  class="font-serif text-2xl leading-tight transition-colors group-hover:text-[#486357] dark:group-hover:text-[#8fb8a7]"
                  style="font-family: 'Spectral', serif"
                >
                  {{ post.title }}
                </h4>

                <p
                  class="mt-3 text-sm text-muted dark:text-[#9ca3af]"
                >
                  {{ formatDate(post.date) }}
                </p>
              </div>
            </NuxtLink>
            </article>
          </div>
        </div>

        <!-- Newsletter -->
        <Subscribe />
      </aside>
    </main>
  </div>
  
</template>

<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
    return queryCollection('journal').path(route.path).first()
})

const { data: relatedPosts } = await useAsyncData('blog', () => {
    return queryCollection('journal')
        .where('path', 'NOT LIKE', route.path)
        .where('category', 'LIKE', page.value?.category || '')
        .order('date', 'DESC')
        .limit(3)
        .all()
}) 

useHead({
  title: page.value ? `${page.value.title}` : 'Chris Rosser',
  meta: [
    {
      name: 'description',
      content: page.value && page.value.description ? page.value.description : 'Chris Rosser is a novelist and essayist writing about myth, memory, history and power from Melbourne, Australia.'
    }
  ]
})
</script>

