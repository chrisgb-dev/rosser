<template>
    <div class="my-24">
        <div class="p-8 max-w-3xl">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.15] tracking-tight mb-8 font-display uppercase text-primary">Chris Rosser</h1>
            <hr class="w-24 border-t-2 border-primary rounded-full my-8 opacity-60" />
            <p class="line-height-3 text-2xl">Novels, essays, and serialised fiction<br />from the edge of myth, history and memory</p>

            <div class="mt-12 flex flex-col sm:flex-row gap-4">
                <UButton size="xl">Read the journal</UButton>
                <UButton size="xl" variant="outline">Explore the fiction</UButton>
            </div>
        </div>
    </div>
        
    <div>
        Big banner for the current project
    </div>

    <div>
        Grid of recent journal posts.
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2">
        
        <PostsWidget />
        <BooksWidget v-if="books" :books="books" />
    </div>

    <div class="grid grid-cols-12  gap-6 p-2 md:p-12">
        <div class="col-span-12 lg:col-span-6">
            <CurrentlyWritingWidget class="mb-6" />
            <CurrentlyReadingWidget />
        </div>
        <div class="col-span-12 lg:col-span-6">
            <div class="border-2 border-md rounded-md p-2 md:p-12">
                <ContentRenderer v-if="doc" :value="doc" />
            </div>
        </div>

    </div>

</template>

<script setup lang="ts">

const route = useRoute()
const { data: doc } = await useAsyncData(route.path, () => {
    return queryCollection('content').path(route.path).first()
})

const { data: books } = await useAsyncData('books', () => {
    return queryCollection('books').all()
})

</script>