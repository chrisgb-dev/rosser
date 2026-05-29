<template>
    <div v-if="posts">
        <div class="p-2 lg:p-6">
            <div class="text-4xl md:text-6xl mb-6">Latest posts</div>
            <div class="grid grid-cols-1 md:grid-cols-2 p-2 md:p-6 gap-2 lg:gap-6">
                <div v-for="post in posts" :key="post.path"
                    class="h-auto rounded-xl transition-all duration-300 hover:translate-y-1 hover:shadow-xl hover:cursor-pointer p-4"
                    @click="openPost(post.path)">
                    <h3 class="text-xl">{{ post.title }}</h3>
                    <p class="mb-2 text-sm">{{ formatDate(post.date) }}</p>
                    <p>{{ post.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

const { data: posts } = await useAsyncData('blog', () => {
    return queryCollection('blog')
        .order('date', 'DESC')
        .limit(4)
        .all()
})

function openPost(path: string) {
    navigateTo(path)
}
</script>