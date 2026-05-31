<template>
    <main class="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div class="my-24">
            <div class="max-w-3xl">
                <h1
                    class="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.15] tracking-tight mb-8 font-display uppercase">
                    Chris Rosser</h1>
                <hr class="w-24 border-t-2 border-primary rounded-full my-8 opacity-60" />
                <p class="line-height-3 text-2xl">Novels, essays, and serialised fiction<br />from the edge of myth,
                    history and memory</p>

                <div class="mt-12 flex flex-col sm:flex-row gap-4">
                    <UButton size="xl" to="/journal">Read the journal</UButton>
                    <UButton size="xl" variant="outline" to="/books">Explore the stories</UButton>
                </div>
            </div>
        </div>

        <section class="pb-12">
            Big banner for the current project
        </section>

        <section class="pb-12">
            <PostsWidget />
        </section>

        <section class="pb-12">
            <BooksWidget />
        </section>

        <section class="pb-12">
            <div class="font-display text-xl md:text-4xl heading mb-6">Now</div>
            <div class="flex flex-col md:flex-row gap-12">
                <CurrentlyWritingWidget class="w-full md:w-1/2" />
                <CurrentlyReadingWidget class="w-full md:w-1/2" />
            </div>
        </section>


    </main>
</template>

<script setup lang="ts">

const route = useRoute()
const { data: doc } = await useAsyncData(route.path, () => {
    return queryCollection('content').path(route.path).first()
})



</script>