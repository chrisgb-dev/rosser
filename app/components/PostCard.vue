<template>
    <div
          v-if="post"
          :key="post.title"
          class="group overflow-hidden rounded-[1.75rem] border border-[#d8cfbf] bg-white/40 transition-all duration-500 hover:-translate-y-1 hover:border-[#b08968]/40 dark:border-white/10 dark:bg-white/3"
        >
          <!-- Image -->
          <div class="relative aspect-16/10 overflow-hidden">
            <img
              :src="post.image"
              :alt="post.title"
              class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />

            <div class="absolute inset-0 bg-linear-to-t from-black/50 via-black/0 to-transparent" />
          </div>

          <!-- Content -->
          <div class="p-8 text-left">
            <p
              class="mb-4 text-xs uppercase tracking-[0.22em] text-[#8c6a43] dark:text-[#d0b089]"
            >
              {{ post.category }}
            </p>

            <h2
              class="font-display text-3xl leading-tight"
            >
              {{ post.title }}
            </h2>

            <p
              class="mt-5 leading-8 text-[#52606d] dark:text-[#9ca3af]"
            >
              {{ post.description }}
            </p>

            <div
              class="mt-8 flex items-center gap-4 text-sm text-[#52606d] dark:text-[#9ca3af]"
            >
              <span>{{ formatDate(post.date) }}</span>
              <span class="opacity-40">•</span>
              <span>{{ post.readingTime.text }}</span>
            </div>

            <NuxtLink
              :to="post.path"
              class="mt-8 inline-flex items-center gap-3 border-b border-[#8c6a43] pb-1 text-sm uppercase tracking-[0.18em] text-[#8c6a43] transition-colors hover:text-[#486357] dark:border-[#d0b089] dark:text-[#d0b089] dark:hover:text-[#8fb8a7]"
            >
              Read Entry
              <span aria-hidden="true">→</span>
            </NuxtLink>
          </div>
        </div>
</template>
<script setup lang="ts">
defineProps<{
    post: {
        title: String,
        description: String,
        date: String,
        readingTime: Object,
        image: String,
        category: String,
        path: String
    }
}>()
</script>