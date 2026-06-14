<template>
   <section
    class="relative overflow-hidden bg-[#f6f1e7] text-[#1f2933] dark:bg-[#111827] dark:text-[#e5e7eb]"
  >
    <!-- Paper texture -->
    <div
      class="pointer-events-none absolute inset-0 opacity-[0.045] mix-blend-multiply dark:opacity-[0.03]"
      style="
        background-image: url('https://www.transparenttextures.com/patterns/paper-fibers.png');
      "
    /> 

    <div class="relative mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <!-- Header -->
      <div class="mb-20 max-w-3xl">
        <p
          class="mb-4 text-sm uppercase tracking-[0.28em] text-primary"
        >
          Journal
        </p>

        <h1
          class="font-display text-5xl leading-tight tracking-tight md:text-6xl"
        >
          Essays, field notes and thoughts on writing
        </h1>

        <p
          class="mt-6 max-w-2xl text-lg leading-8 text-[#52606d] dark:text-[#9ca3af]"
        >
          Writing on myth, history, fiction, memory and the landscapes that shape them.
        </p>
      </div>

      <!-- Latest post -->
      <article
        class="group mb-20 overflow-hidden rounded-4xl border border-[#d8cfbf] bg-black/3 transition-all duration-500 hover:-translate-y-1 hover:border-[#b08968]/40 dark:border-white/10 dark:bg-white/3"
      >
        <div class="grid lg:grid-cols-2">
          <div class="relative min-h-85 overflow-hidden">
            <img
              :src="posts[0].image || '/images/yannick-pulver-hopX_jpVtRM-unsplash.jpg'"
              :alt="posts[0].title"
              class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />

            <div
              class="absolute inset-0 bg-linear-to-r from-black/60 via-black/20 to-transparent"
            />
          </div>

          <div class="flex flex-col justify-center p-10 lg:p-14">
            <p
              class="mb-5 text-xs uppercase tracking-[0.24em] text-[#8c6a43] dark:text-[#d0b089]"
            >
              Latest Post
            </p>

            <h2
              class="font-display text-4xl leading-tight"
            >
              {{ posts[0].title }}
            </h2>

            <p
              class="mt-6 max-w-xl text-lg leading-8 text-[#52606d] dark:text-[#9ca3af]"
            >
              {{ posts[0].description }}
            </p>

            <div
              class="mt-8 flex items-center gap-4 text-sm text-[#52606d] dark:text-[#9ca3af]"
            >
              <span>{{ formatDate(posts[0].date) }}</span>
              <span class="opacity-40">•</span>
              <span>{{ posts[0].readingTime.text }}</span>
            </div>

            <NuxtLink
              :to="posts[0].path"
              class="mt-10 inline-flex w-fit items-center gap-3 border-b border-[#8c6a43] pb-1 text-sm uppercase tracking-[0.18em] text-secondary transition-colors hover:text-primary dark:border-[#d0b089] dark:text-[#d0b089]"
            >
              Read
              <span aria-hidden="true">→</span>
            </NuxtLink>
          </div>
        </div>
      </article>

      <!-- Posts grid -->
      <div class="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        <PostCard v-for="post in posts.slice(1)" :key="post.title" :post="post" />
      </div>
    </div>
  </section>
</template>

<script setup>
const route = useRoute()
const {data: posts} = await useAsyncData(route.path, () => {
    return queryCollection('journal')
    .order('date', 'DESC')
    .all()
})
useSeoMeta({
  title: 'Journal',
  description: 'Essays, field notes and thoughts on writing by Chris Rosser.',
})

</script>
  