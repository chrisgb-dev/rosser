<template>
    <section v-if="readingList" class="p-2 md:p-12">

        <div class="flex flex-col sm:flex-row gap-4 mb-6 mx-auto justify-center">
            <UButton variant="ghost" size="xl" @click="() => { searchStatus = null; searchString = null }">Show all
            </UButton>
            <UButton variant="ghost" size="xl" @click="searchStatus = 'reading'">Reading</UButton>
            <UButton variant="ghost" size="xl" @click="searchStatus = 'read'">Read</UButton>
            <UButton variant="ghost" size="xl" @click="searchStatus = 'to read'">To read</UButton>
            <UButton variant="ghost" size="xl" @click="searchStatus = 'did not finish'">Did not finish</UButton>
        </div>

        <input v-model="searchString" type="text" placeholder="Search by title, author or series"
            class="input input-bordered w-full mb-6"
            @keyup="filterBooks(readingList.meta.books, searchString, searchStatus)" />

        {{ filterBooks(readingList.items, searchString, searchStatus).length }} book<span
            v-if="filterBooks(readingList.items, searchString, searchStatus).length !== 1">s</span>.

        <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-6 items-top">

            <div v-for="book in sortBooks(filterBooks(readingList.items, searchString, searchStatus))" :key="book.id"
                class="relative rounded-lg shadow-md overflow-hidden bg-white group">
                <NuxtLink :to="book.medium == 'audiobook' ? book.linkApple : book.linkAmazon" target="_blank">
                    <div class="aspect-2/3 w-full">
                        <img :src="book.cover" :alt="`${book.title} book cover`" :title="`${book.title} book cover`"
                            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                        <span
                            class="absolute bottom-2 left-2 z-10 px-3 py-1 rounded-full text-xs font-semibold shadow transition-transform duration-300 group-hover:scale-110"
                            :class="getBadgeClass(book.status)">
                            {{ book.status === 'reading' ? 'Reading' : book.status === 'read' ? 'Read' : book.status ===
                                'to read' ? 'To Read' : 'Did Not Finish' }}
                        </span>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </section>
    <section v-else class="p-2 md:p-12">
        <p class="text-center">Loading reading list...</p>
        <span class="loading loading-spinner loading-lg"></span>
    </section>
</template>

<script setup>

const readingList = ref(null);

const searchString = ref('');
const searchStatus = ref('');

function sortBooks(data) {
    return data.sort((a, b) => {
        return a.expand.authors[0].lastName.toLowerCase().localeCompare(b.expand.authors[0].lastName.toLowerCase()) ||
            a.published - b.published || a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    })
}

function getBadgeClass(status) {
    switch (status) {
        case 'read':
            return 'bg-primary-600 text-white ';
        case 'reading':
            return 'bg-warning text-white';
        case 'to read':
            return 'bg-info text-white';
        default:
            return 'bg-danger text-white';
    }
}

function filterBooks(books, searchString, searchStatus) {
    if (!searchString && !searchStatus) return books;
    const lowerSearch = searchString ? searchString.toLowerCase() : '';
    return books.filter(book =>
        (!searchString || book.title.toLowerCase().includes(lowerSearch) || book.expand.authors[0].lastName.toLowerCase().includes(lowerSearch) || book.series.toLowerCase().includes(lowerSearch)) &&
        (!searchStatus || book.status === searchStatus)
    );
}

function getReadingList() {
    return fetch('/api/reading-list')
        .then(res => res.json())
}

useHead({
    title: 'Chris Rosser | Reading List'
})

onMounted(async () => {
    try {
        const data = await getReadingList();
        readingList.value = data;
    } catch (error) {
        console.error('Error fetching reading list:', error);
    }
})

</script>