<template>
    <div
        class="subscribe-card overflow-hidden rounded-4xl border border-[#d8cfbf] bg-[#20332b] dark:bg-muted p-8 text-white dark:border-white/10">
        <p class="text-xs uppercase tracking-[0.24em] text-[#d0b089]">
            Stay In The Loop
        </p>

        <div class="subscribe-layout flex flex-col gap-8 md:items-center">

            <div class="subscribe-copy">
                <div v-if="!serverMessage">
                    <h3 class="mt-5 font-serif text-3xl leading-tight" style="font-family: 'Spectral', serif">
                        Occasional essays, serialised fiction and project updates.
                    </h3>

                    
                    <p class="mt-5 text-sm text-white/60">
                        You can also subscribe <a href="https://chrisrosser.substack.com" target="_blank"
                            class="underline hover:text-[#d0b089]">on Substack</a> if you prefer.
                    </p>
                </div>
                <div v-else>
                    <h3 class="mt-5 font-serif text-3xl leading-tight" style="font-family: 'Spectral', serif">
                        {{ serverError ? 'Error!' : 'Thanks for subscribing!' }}
                    </h3>
                    <p>{{ serverMessage }}</p>
                </div>
            </div>

            <div v-if="!serverMessage" class="subscribe-form w-full">
                <UForm :schema="schema" :state="state" class=" mx-auto w-full" @submit="onSubmit">
                    <UFormField name="email" size="xl">
                        <input type="email" placeholder="Your email address" v-model="state.email"
                            class="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/50 focus:border-[#d0b089] focus:outline-none" />
                    </UFormField>

                    <input name="website" tabindex="-1" autocomplete="off" class="hidden" v-model="state.website" />

                    <UFormField class="my-6">
                        <UButton :loading="loading" type="submit"
                            class="mt-4 w-full rounded-xl bg-[#b08968] px-5 py-4 text-sm uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#c29a76] cursor-pointer :hover:enabled:bg-[#c29a76] disabled:cursor-not-allowed disabled:bg-[#b08968]/50 disabled:text-white/50">
                            Subscribe
                        </UButton>
                    </UFormField>
                </UForm>
                <p class="mt-5 text-sm text-white/60">
                    No spam. Unsubscribe anytime.
                </p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import * as z from 'zod';
import type { FormSubmitEvent } from '@nuxt/ui'

const toast = useToast()
const loading = ref(false);

const schema = z.object({
    email: z.email('Please enter a valid email address'),
    website: z.string().optional()
})

const serverMessage = ref<string | null>(null)
const serverError = ref<boolean | null>(null)

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
    email: undefined,
    website: undefined
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
    const email = event.data.email.trim().toLowerCase()

    loading.value = true

    try {
        const rsp = await $fetch<{ message?: string }>('/api/subscribe', {
            method: 'POST',
            body: { 
                email: event.data.email, 
                website: event.data.website
            }
        })

        serverMessage.value = rsp.message ?? 'Subscription successful'
        toast.add({
            title: 'Subscribed',
            description: 'Thanks for subscribing! You will receive a confirmation email shortly.',
            color: 'success'
        })
        resetForm()
    } catch (error: any) {
        serverError.value = true
        const message = error?.data?.message ?? 'Failed to subscribe, please try again later.'
        serverMessage.value = message
        toast.add({ title: 'Error', description: message, color: 'error' })
    } finally {
        loading.value = false;
        resetForm()
    }
}

function resetForm() {
    state.email = undefined
    state.website = undefined
}

</script>

<style scoped>
.subscribe-card {
    container-type: inline-size;
}

@container (min-width: 38rem) {
    .subscribe-layout {
        flex-direction: row;
        align-items: center;
        gap: 1rem;
    }

    .subscribe-copy {
        flex: 1 1 0;
    }

    .subscribe-form {
        flex: 0 0 min(20rem, 100%);
    }
}
</style>