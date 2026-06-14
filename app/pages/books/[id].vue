<template>
    <main v-if="doc" class="mx-auto max-w-7xl px-6 py-12 lg:px-8 text-center">
        <div class="my-24">
            <div class="">
                <hr class="w-24 border-t-2 border-primary rounded-full my-8 opacity-60 mx-auto" />
                <p class="mb-4 text-sm uppercase tracking-[0.28em] text-primary">{{ doc.genre }}</p>
                <h1
                    class="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.15] tracking-tight mb-8 font-display uppercase">
                    {{ doc.title }}
                </h1>
                <p class="line-height-3 text-2xl">{{ doc.meta.subtitle }}</p>
                <hr class="w-24 border-t-2 border-primary rounded-full my-8 opacity-60 mx-auto" />
            </div>
        </div>

        <section>
            <div class="flex flex-col md:flex-row gap-12 md:gap-24">
                <div class="md:w-1/3">
                    <img :src="`/images/books/${doc.cover}`" class="rounded-lg w-full h-auto" />
                </div>
                <div class="md:w-2/3 text-left">
                    <div class="text-2xl mb-4 heading">{{ doc.meta.tagline }}</div>
                    <div class="prose prose-lg mt-16 max-w-none
                        prose-p:text-[#2d3748]
                            prose-p:leading-[1.9]
                            prose-headings:font-serif
                            prose-headings:text-[#1f2933]
                            prose-strong:text-[#1f2933]
                            prose-blockquote:border-[#b08968]
                            prose-blockquote:text-[#3d4852]
                            prose-blockquote:italic
                            prose-a:text-[#8c6a43]
                            prose-a:no-underline
                            prose-a:transition-colors
                            hover:prose-a:text-[#486357]

                            dark:prose-p:text-[#d1d5db]
                            dark:prose-headings:text-[#f9fafb]
                            dark:prose-strong:text-[#f9fafb]
                            dark:prose-blockquote:border-[#d0b089]
                            dark:prose-blockquote:text-[#e5e7eb]
                            dark:prose-a:text-[#d0b089]
                            dark:hover:prose-a:text-[#8fb8a7]">

                        <ContentRenderer :value="doc" class="p-2 body-text" />
                    </div>
                    <div v-if="doc.meta.buy_links" class="mt-16">
                        <div class="text-center font-display text-xl my-12 uppercase">Available from</div>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <UButton
                                v-for="link in doc.meta.buy_links"
                                :icon="link.icon"
                                variant="outline"
                                :key="link.url"
                                :to="link.url"
                                target="_blank">
                                    {{ link.label }}
                            </UButton>
                        </div>
                    </div>
                    <div v-else>
                        <p class="text-center text-muted dark:text-[#9ca3af] mt-16">Release date and purchase links coming soon.</p>
                    </div>
                </div>
            </div>
        </section>
        
    </main>
</template>

<script setup lang="ts">

const route = useRoute()
const { data: doc } = await useAsyncData(route.path, () => {
    return queryCollection('books').path(route.path).first()
})


</script>
