<template>
    <main class="mx-auto max-w-7xl px-6 py-12 lg:px-8 text-center">
        <div class="my-24">
            <div class="">
                <h1
                    class="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.15] tracking-tight mb-8 font-display uppercase">
                    Reading list</h1>
                <hr class="w-24 border-t-2 border-primary rounded-full my-8 opacity-60 mx-auto" />
                <p class="line-height-3 text-2xl">Books I'm reading, have read, and want to read</p>
                <p class="mt-1 mb-3 line-height-3 text-sm">Affiliate links in use.</p>
                <div class="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                    <UButton size="xl" to="/journal">Recommend a book</UButton>
                </div>
            </div>
        </div>
        <ReadingList />
    </main>
</template>