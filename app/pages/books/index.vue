<template>
    <main class="mx-auto max-w-7xl px-6 py-12 lg:px-8 text-center">
    <div class="my-24">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.15] tracking-tight mb-8 font-display uppercase">Books</h1>
        <hr class="w-24 border-t-2 border-primary rounded-full my-8 opacity-60 mx-auto" />

        <p class="mt-4 mb-3 line-height-3 text-center mx-auto text-2xl" style="max-width:500px">Stories from edge of myth, history and memory</p>
    </div>

    <section class="p-2 md:px-12 mx-auto">
    <div class="grid border-collapse grid-cols-2">

        <BookCard v-for="book in books" :key="book.path" :book="book" />
    </div>
    </section>
    </main>
</template>

<script setup lang="ts">
const route = useRoute()
const  { data: books } = await useAsyncData(route.path, () => {
    return queryCollection('books').order('order', 'ASC').all()
})

useSeoMeta({
  title: 'Books',
  description: 'Books and stories by Chris Rosser.',
})
</script>

