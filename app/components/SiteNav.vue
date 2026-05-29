<template>
  <header
    class="sticky top-0 z-50 border-b border-[#d8cfbf]/60 bg-[#f6f1e7]/80 backdrop-blur-xl dark:border-white/10 dark:bg-[#111827]/80">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
      <NuxtLink to="/" class="font-display text-2xl tracking-[0.22em] uppercase">
        Chris Rosser
      </NuxtLink>

      <nav class="hidden items-center gap-10 text-sm tracking-wide md:flex">
        <NuxtLink v-for="item in navItems" :key="item.label" :to="item.to" :class="[
          'transition-colors hover:text-primary',
          item.active ? 'border-b border-secondary pb-1 text-secondary' : ''
        ]">
          {{ item.label }}
        </NuxtLink>

        <UColorModeButton />
      </nav>

      <!-- <div class="md:hidden">
        <UButton variant="ghost" @click="$emit('toggle-menu')">
          <span class="sr-only">Open menu</span>
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </UButton>
      </div> -->
    </div>
  </header>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute();


const navItems = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Journal',
    to: '/journal',
    active: route.path === '/journal',
    class: 'font-display'
  },
  {
    label: 'Books',
    to: '/books',
    active: route.path.startsWith('/books'),
    class: 'font-display'
  },
  {
    label: 'About',
    to: '/about',
    active: route.path.startsWith('/about'),
    class: 'font-display'
  },
  {
    label: 'Subscribe',
    to: '/newsletter',
    active: route.path.startsWith('/newsletter'),
    class: 'font-display'
  },

])


umTrackView().then((res: any) => console.log(res.ok));

</script>
