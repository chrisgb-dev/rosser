<template>
    <UForm v-if="!serverMessage" :schema="schema" :state="state" class=" mx-auto w-full" @submit="onSubmit">
        <UFormField label="Title" name="title" size="xl" hint="Required">
            <UInput v-model="state.title" class="w-full" placeholder="Enter the book's title" />
        </UFormField>

        <UFormField label="Author" name="author" size="xl" hint="Required">
            <UInput v-model="state.author" class="w-full" placeholder="Enter the author's name" />
        </UFormField>
        
        <UFormField label="Kobo Link" name="kobo_link" size="xl" hint="Optional">
            <UInput v-model="state.kobo_link" class="w-full" placeholder="Enter the Kobo link" />
        </UFormField>

        <UFormField label="Reason" name="reason" size="xl" hint="Required">
            <UTextarea v-model="state.reason" class="w-full" placeholder="Tell me why you recommend this book" />
        </UFormField>


        <input name="website" tabindex="-1" autocomplete="off" class="hidden" v-model="state.website" />

        <UFormField class="my-6">
            <UButton :loading="loading" type="submit">
                Submit
            </UButton>
        </UFormField>
    </UForm>
    <div v-else class="text-center">
        <p>{{ serverMessage }}</p>

        <div v-if="donationLink" class="mt-4">
            <p class="mb-6">If you'd like to support my reading habit, or my writing in general, consider making a donation.</p>
            <UButton :href="donationLink" target="_blank" class="inline-block mt-2 px-6 py-3 bg-[#b08968] text-white rounded-lg hover:bg-[#c29a76] transition-colors">
                Donate
            </UButton>
        </div>
            
    </div>
</template>
<script setup lang="ts">

import * as z from 'zod';
import type { FormSubmitEvent } from '@nuxt/ui'

const serverMessage = ref<string | null>(null);
const donationLink = ref<string | null>(null);

const emitter = defineEmits(['submitted']);

const toast = useToast()
const loading = ref(false);

const schema = z.object({
    title: z.string('Enter the book\'s title').min(5, 'Book\'s title must be at least 5 characters').max(100, 'Title must be less than 100 characters'),
     author: z.string('Enter the author\'s name').min(5, 'Author\'s name must be at least 5 characters').max(100, 'Author\'s name must be less than 100 characters'),
    reason: z.string('Enter your recommendation').min(10, 'Reason must be at least 10 characters').max(1000, 'Reason must be less than 1000 characters'),
    kobo_link: z.url({
        protocol: /^https$/,
        hostname: /^www\.kobo\.com$/,
        message: 'Please enter a valid Kobo link (must start with https://www.kobo.com)'
    }).optional(),
    website: z.string().optional()
});

type Schema = z.output<typeof schema>


const state = reactive<Partial<Schema>>({
    title: undefined,
    author: undefined,
    reason: undefined,
    kobo_link: undefined,
    website: undefined
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
    loading.value = true

    const rsp = await fetch('/api/reading/recommend', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(event.data)
    })
    const data = await rsp.json();
    if (rsp.ok) {
        serverMessage.value = "I\'ve added your recommendation to my list and will check it out soon.";
        donationLink.value = data.donationLink || null;
        toast.add({
            title: 'Thank you for your recommendation!',
            description: 'I appreciate your suggestion and will consider adding it to my reading list.',
            color: 'success'
        })
    } else {
        toast.add({
            title: 'Error submitting recommendation',
            description: data.error || 'An error occurred while submitting your recommendation. Please try again later.',
            color: 'error'
        })
    }
    emitter('submitted');
 }
</script>