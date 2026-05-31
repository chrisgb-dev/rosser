<template>
  <div v-if="books">
    <div class="text-center">
      <div class="flex justify-between">
        <div class="font-display text-xl md:text-4xl heading mb-6">Selected Works</div>
        <div>
          <UButton variant="ghost" size="sm" class="mt-4" trailingIcon="i-lucide-arrow-right" to="/books">View all
            projects</UButton>
        </div>
      </div>
      <div class="grid border-collapse lg:grid-cols-3">
        <BookCard v-for="book in books" :key="book.path" :book="book" />
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
const { data: books } = await useAsyncData('books', () => {
  return queryCollection('books').limit(3).all()
})

</script>