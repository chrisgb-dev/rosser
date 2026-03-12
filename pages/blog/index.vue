<template>
    <main class="p-2 md:p-12">
        <div class="text-center">
            <h1 class="text-4xl md:text-6xl leading-9 tracking-tight sm:text-4xl sm:leading-10  md:leading-14 font-display mb-10">Blog</h1>
            <p class="text-xl leading-7">Latest posts by Chris Rosser</p>
            <p>For older posts, visit my <a href="https://archive.chrisrosser.net" target="_blank">archive</a>.</p>
        </div>
        <div v-if="posts" class="mt-6">
            
            <ul class="divide-y">
                <li v-for="post in posts" :key="post._path" class="py-5">
                    <NuxtLink :to="post.path">
                        <div class="flex flex-col md:flex-row items-start md:gap-10">
                            <dl class="md:w-40">
                                <dt class="sr-only">Published on</dt>
                                <dd class="text-base font-medium leading-6">
                                    <time :dateTime="post.date" suppressHydrationWarning>
                                        {{ formatDate(post.date) }}
                                    </time>
                                </dd>
                            </dl>
                            <div class="space-y-3">
                                <div>
                                    <h2 class="text-2xl font-bold leading-8 tracking-tight">
                                        {{ post.title }}
                                    </h2>
                                    <div class="flex flex-wrap">
                                        <span v-for="tag in post.tags" :key="tag" class="badge badge-accent">{{ tag }}</span>
                                    </div>
                                    <div>{{ post.meta.readingTime.text }}</div>
                                </div>
                                <div class="prose max-w-none0 text-white">
                                    {{ post.description }}
                                </div>
                            </div>
                        </div>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </main>
</template>

<script setup>
const route = useRoute()
const {data: posts} = await useAsyncData(route.path, () => {
    return queryCollection('blog')
    .order('date', 'DESC')
    .all()
})


</script>
  