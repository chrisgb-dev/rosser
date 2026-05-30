<template>
<div
    class="relative min-h-screen overflow-hidden bg-[#f6f1e7] text-[#1f2933] dark:bg-[#111827] dark:text-[#e5e7eb]"
  >
    <!-- Paper texture -->
    <div
      class="pointer-events-none absolute inset-0 opacity-[0.045] mix-blend-multiply dark:opacity-[0.03]"
      style="
        background-image: url('https://www.transparenttextures.com/patterns/paper-fibers.png');
      "
    />

    <!-- Decorative vertical line -->
    <!-- <div
      class="pointer-events-none absolute right-[28%] top-0 hidden h-full w-px bg-[#d8cfbf] dark:bg-white/10 xl:block"
    /> -->

    <!-- Main layout -->
    <main
      class="relative mx-auto grid max-w-7xl gap-20 px-6 py-20 xl:grid-cols-[minmax(0,1fr)_320px] xl:px-8"
    >
      <!-- Article -->
      <article v-if="page" class="max-w-3xl">
        <!-- Category -->
        <p
          class="mb-6 text-sm uppercase tracking-[0.25em] text-[#8c6a43] dark:text-[#d0b089]"
        >
          Essays
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

          <figcaption
            class="mt-4 text-sm italic text-muted dark:text-[#9ca3af]"
          >
            Morning light in the Otways, Victoria.
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
        <div>
          <h3
            class="mb-8 text-sm uppercase tracking-[0.24em] text-[#8c6a43] dark:text-[#d0b089]"
          >
            On This Page
          </h3>

          <nav class="space-y-5 text-lg">
            <a
              href="#"
              class="block transition-colors hover:text-[#486357] dark:hover:text-[#8fb8a7]"
            >
              The past is not a fixed thing
            </a>

            <a
              href="#"
              class="block text-muted transition-colors hover:text-[#486357] dark:text-[#9ca3af] dark:hover:text-[#8fb8a7]"
            >
              Story as inheritance
            </a>

            <a
              href="#"
              class="block text-muted transition-colors hover:text-[#486357] dark:text-[#9ca3af] dark:hover:text-[#8fb8a7]"
            >
              The responsibility of telling
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
              class="group flex gap-5"
            >
              <img
                :src="post.image"
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
                  {{ post.date }}
                </p>
              </div>
            </article>
          </div>
        </div>

        <!-- Newsletter -->
        <div
          class="overflow-hidden rounded-4xl border border-[#d8cfbf] bg-[#20332b] p-8 text-white dark:border-white/10"
        >
          <p
            class="text-xs uppercase tracking-[0.24em] text-[#d0b089]"
          >
            Stay In The Loop
          </p>

          <h3
            class="mt-5 font-serif text-3xl leading-tight"
            style="font-family: 'Spectral', serif"
          >
            Occasional essays, serialized fiction and project updates.
          </h3>

          <input
            type="email"
            placeholder="Your email address"
            class="mt-8 w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/50 focus:border-[#d0b089] focus:outline-none"
          />

          <button
            class="mt-4 w-full rounded-xl bg-[#b08968] px-5 py-4 text-sm uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#c29a76]"
          >
            Subscribe
          </button>

          <p class="mt-5 text-sm text-white/60">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </aside>
    </main>
  </div>
  
</template>

<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
    return queryCollection('journal').path(route.path).first()
})

const relatedPosts = [
  {
    title: 'Winter on the Great Ocean Road',
    category: 'Field Notes',
    date: 'Apr 28, 2026',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'The Weight of a Name',
    category: 'Writing',
    date: 'May 5, 2026',
    image:
      'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'On Maps and Other Fictions',
    category: 'Essays',
    date: 'Mar 16, 2026',
    image:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop'
  }
]
</script>

