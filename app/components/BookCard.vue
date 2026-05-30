<template>
    <div class="
        flex
        flex-col
        gap-6
        p-8
        border
        border-stone-300/70

        <!-- bg-[#f6f1e7]
        dark:bg-[#111827] -->

        sm:flex-row
    ">
        <NuxtImg 
            :src="`/images/books/${book.cover}`"
            :alt="book.title"
            class=" shrink-0 w-48 object-contain" />

        <div class="flex flex-col text-left">
            <h3 class="font-display text-xl" style="font-family: Spectral, serif">
                {{ book.title }}
            </h3>

            <p class="mt-2 text-xs uppercase tracking-[0.2em]">
                {{ book.genre }}
            </p>

            <p class="mt-5 ">
                {{ book.description }}
            </p>

            <NuxtLink :to="book.path" class="mt-auto pt-6">
                Learn More →
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    book: {
        cover: string
        title: string
        genre: string
        description: string
        path: string
    }
}>()
</script>