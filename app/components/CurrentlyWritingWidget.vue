<template>

<div v-if="writingList" class="p-6 shadow-2 border-round border rounded-md border-muted">
    <div class="text-2xl md:text-3xl font-medium font-display mb-4">What I'm writing</div>
    <div v-for="book in writingList.meta.books" class="mb-4">
        <NuxtLink :to="book.url">
            <div class="font-semibold text-lg mt-0 mb-0">{{ book.title }}</div>
            <UProgress v-model="book.progress" :max="100" size="lg" />
        </NuxtLink>
    </div>
</div>

</template>

<script setup>

const { data: writingList } = await useAsyncData('writingList', () => {
  return queryCollection('writingList')
    .order('title', 'ASC')
    .first()
})

</script>