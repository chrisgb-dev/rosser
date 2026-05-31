<template>
<NuxtLink to="/reading">
    <div class="p-6 shadow-2 border border-muted rounded-md">
        <div class="text-2xl md:text-3xl mb-4f font-display font-medium">What I'm reading</div>
        <div v-if="loading">
            Loading...
        </div>
        <div v-else-if="readingList && readingList.length > 0">
            <div v-for="book in readingList" class="mb-4">
                <div class="font-medium text-lg mt-0 mb-0">{{ book.title }}<br />by {{ book.expand.authors[0].firstName }} {{ book.expand.authors[0].lastName }}</div>
                <UProgress v-model="book.progress" :max="100" size="lg" />
            </div>
        </div>
        <div v-else>
            Nothing's on my current reading list.
        </div>
    </div>
</NuxtLink>
</template>

<script setup>
const readingList = ref(null);
const loading = ref(true);

function getReadingList() {
    return fetch('/api/reading-list', {})
        .then(res => res.json())
        .then(data => {
            return data.items.filter(item => item.status === 'reading');
        })
}

onMounted(async () => {
    try {
        const data = await getReadingList();
        readingList.value = data;
    } catch (error) {
        console.error('Error fetching reading list:', error);
    } finally {
        loading.value = false;
    }
})

</script>