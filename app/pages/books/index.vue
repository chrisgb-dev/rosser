<template>
    <div class="text-center p-24 relative">
        <div class="text-5xl mb-1 font-display font-medium uppercase">Books</div>

        <p class="mt-4 mb-3 line-height-3 text-center mx-auto text-2xl" style="max-width:500px">Stories from edge of myth, history and memory</p>
    </div>

    <section class="p-2 md:px-12 lg:px-48 mx-auto">
    <div class="grid border-collapse lg:grid-cols-2">

        <BookCard v-for="book in books" :key="book.path" :book="book" />
    </div>
    </section>
</template>

<script setup lang="ts">
const route = useRoute()
const  { data: books } = await useAsyncData(route.path, () => {
    return queryCollection('books').order('order', 'ASC').all()
})
</script>

