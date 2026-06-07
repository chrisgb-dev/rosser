<template>
    <footer class="w-full">
        <div class="flex flex-row items-start md:items-center justify-between gap-6 px-6 md:px-24 py-12">
            <div class="flex flex-col max-w-3xs md:max-w-none">
                <p class="text-muted text-xl uppercase mb-3">Chris Rosser</p>
                <p class="text-muted text-sm">Novelist and essayist.</p>
                <p class="text-muted text-sm">Writing about myth, history, memory, and power.</p>
                <p class="text-muted text-sm mt-6">Melbourne, Australia</p>
            </div>
            <div class="flex flex-row">
                <div class="flex flex-col items-center gap-2">
                    <p class="text-muted text-sm uppercase mb-3">Explore</p>
                    <UNavigationMenu :items="exploreNavItems" variant="link" orientation="vertical" />
                </div>
                <div class="flex flex-col items-center gap-2">
                    <p class="text-muted text-sm uppercase mb-3">Connect</p>
                    <UNavigationMenu :items="connectItems" variant="link" orientation="vertical" />
                </div>
            </div>
        </div>
        <div class="p-6">
            <p class="text-muted text-sm text-center">© 2007 &ndash; {{ new Date().getFullYear() }} Chris
                Rosser. All rights reserved.</p>
            <p class="text-muted text-sm text-center my-3">
                <NuxtLink to="/privacy" class="text-sm text-600 cursor-pointer">
                    Privacy Policy
                </NuxtLink>
            </p>
            <p class="text-muted text-sm text-center mt-6">Crafted with care, by the author.</p>
        </div>
    </footer>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const exploreNavItems: NavigationMenuItem[] = [
    {
        label: 'Journal',
        to: '/journal',

    },
    {
        label: 'Books',
        to: '/books',
    },
    {
        label: 'Reading',
        to: '/reading',
    },
    {
        label: 'About',
        to: '/about',
    },
    {
        label: 'Archive',
        to: 'https://archive.chrisrosser.net',
        target: '_blank'
    }
]
const connectItems: NavigationMenuItem[] = [
    {
        label: 'Subscribe',
        to: '/subscribe',

    },
    // {
    //     label: 'RSS Feed',
    //     to: '/rss.xml',
    // },
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