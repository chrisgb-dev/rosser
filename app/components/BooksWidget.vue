<template>
  <div v-if="props.books">
    <div class="p-2 md:p-6 text-center">
      <div class="text-4xl md:text-6xl heading mb-6">Books by Chris Rosser</div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-2 md:p-4">
        <div v-for="book in props.books" :key="book.path">
          <NuxtLink :to="book.path">
            <img :src="`/images/books/${book.meta.cover}`"
              class="w-full h-auto rounded-xl transition-all duration-300 hover:translate-y-1 hover:shadow-xl" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  books: Array<any>
}>()

</script>