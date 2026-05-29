<template>
    <BooksWidget :books="books" />
</template>

<script setup lang="ts">
const route = useRoute()
const  { data: books } = await useAsyncData(route.path, () => {
    return queryCollection('books').order('order', 'ASC').all()
})
</script>

