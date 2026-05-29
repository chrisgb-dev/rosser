<template>
<NuxtLink to="/reading">
    <div class="surface-card p-6 shadow-2 border-round border-2 rounded-md">
        <div class="text-3xl md:text-4xl mb-4f font-display uppercase font-medium">What I'm reading</div>
        <div v-if="readingList && readingList.items.length > 0">
            <div v-for="book in readingList.items" class="mb-4">
                <div class="font-medium text-lg mt-0 mb-0">{{ book.title }}<br />by {{ book.expand.authors[0].firstName }} {{ book.expand.authors[0].lastName }}</div>
                <progress class="progress w-full" :value="book.progress" max="100"></progress>
            </div>
        </div>
        <div v-else>
            Nothing's on my current reading list.
        </div>
    </div>
</NuxtLink>
</template>

<script setup>
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://pb-crnet.de1.53675094.xyz');

const readingList = await pb.collection('books').getList(1, 999,{
    expand: 'authors',
    filter: 'status="reading"'
});


</script>