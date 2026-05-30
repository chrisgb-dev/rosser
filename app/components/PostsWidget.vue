<template>
  <div v-if="posts" class="p-2 md:p-12">
    <div class="p-2 md:p-24 text-center">
      <div class="flex justify-between">
        <div class="font-display text-xl md:text-4xl heading mb-6">Recent Journal Entries</div>
        <div>
          <UButton variant="ghost" size="sm" class="mt-4" trailingIcon="i-lucide-arrow-right" to="/journal">View all
            entries</UButton>
        </div>
      </div>
      <div class="grid border-collapse lg:grid-cols-3 gap-6">
        <PostCard v-for="post in posts" :key="post.path" :post="post" />
      </div>

    </div>
  </div>
</template>
<script setup lang="ts">

const { data: posts } = await useAsyncData('blog', () => {
    return queryCollection('journal')
        .order('date', 'DESC')
        .limit(3)
        .all()
})

function openPost(path: string) {
    navigateTo(path)
}
</script>