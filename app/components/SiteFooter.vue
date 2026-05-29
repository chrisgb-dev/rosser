<template>
    <UFooter>
        <template #bottom>
            <p class="text-muted text-sm text-center">© 2007 &ndash; {{ new Date().getFullYear() }} Chris
                Rosser. All rights reserved.</p>
            <p class="text-muted text-sm text-center">
                <NuxtLink to="/privacy" class="text-sm text-600 cursor-pointer">
                Privacy Policy
                </NuxtLink>
            </p>
            <p class="text-muted text-sm text-center">Some affiliate links in use.</p>
        </template>

        <template #left>
            <div class="flex flex-col gap-1 max-w-48">
                <p class="text-muted text-xl uppercase mb-3">Chris Rosser</p>
                <p class="text-muted text-sm">Novelist and essayist.</p>
                <p class="text-muted text-sm">Writing about myth, history, memory, and power.</p>

                <p class="text-muted text-sm">Melbourne, Australia</p>
            </div>
        </template>

        <div class="flex flex-col md:flex-row gap-12 md:gap-52">
            <div class="flex flex-col items-start gap-2">
                <p class="text-muted text-sm uppercase mb-3">Explore</p>
                <UNavigationMenu :items="exploreNavItems" variant="link" orientation="vertical" />
            </div>
            <div class="flex flex-col items-start gap-2">
                <p class="text-muted text-sm uppercase mb-3">Connect</p>
                <UNavigationMenu :items="connectItems" variant="link" orientation="vertical" />
            </div>
        </div>

        <template #right>
            <UButton icon="i-lucide-mail" color="neutral" variant="ghost" to="https://go.nuxt.com/discord"
                target="_blank" aria-label="Discord" />
            <UButton icon="i-simple-icons-x" color="neutral" variant="ghost" to="https://go.nuxt.com/x" target="_blank"
                aria-label="X" />
            <UButton icon="i-simple-icons-goodreads" color="neutral" variant="ghost" to="https://www.goodreads.com/author/show/17761773.Chris_Rosser"
                target="_blank" aria-label="Goodreads" />

        </template>
    </UFooter>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const exploreNavItems: NavigationMenuItem[] = [
    {
        label: 'Journal',
        to: '/journal',

    },
    {
        label: 'Fiction',
        to: '',
    },
    {
        label: 'Reading',
        to: '/reading',
    },
    {
        label: 'About',
        to: '/about',
    }
]
const connectItems: NavigationMenuItem[] = [
    {
        label: 'Subscribe',
        to: '/subscribe',

    },
    {
        label: 'RSS Feed',
        to: '/rss.xml',
    },
    {
        label: 'Substack',
        to: 'https://chrisrosser.substack.com/?utm_campaign=profile_chips',
    },
    {
        label: 'Contact',
        to: '/contact',
    }
]
</script>