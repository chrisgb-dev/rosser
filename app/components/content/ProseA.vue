<template>
    <NuxtLink
      :href="props.href"
      :target="checkLocalLink(props.href) ? '_self' : '_blank'"
      :class="`text-info hover:text-accent`"
    >
      <slot />
      <span v-if="!checkLocalLink(props.href)" class="ml-0.5 text-sm">
        <sup>{{ props.href && !checkLocalLink(props.href) ? '↗' : '' }}</sup>
      </span>
    </NuxtLink>
  </template>
  
  <script setup lang="ts">
  import type { PropType } from 'vue'
  
  const props = defineProps({
    href: {
      type: String,
      default: ''
    },
    target: {
      type: String as PropType<'_blank' | '_parent' | '_self' | '_top' | (string & object) | null | undefined>,
      default: undefined,
      required: false
    }
  })

  function checkLocalLink(href: string) {
    if (  href.startsWith('/') || href.startsWith('#') || href.startsWith('.') ) {
      return true
    }
    return false
  }

  </script>

<style scoped>

.text-theme {
  color: var(--fallback-bc,oklch(var(--bc)/1));
}
</style>