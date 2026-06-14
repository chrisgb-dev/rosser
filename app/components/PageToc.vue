<script setup lang="ts">
const props = defineProps<{
  toc: any
}>()
</script>

<template>
  <div v-if="props.toc && props.toc.links?.length > 1">
    <h2 class="text-2xl font-bold mb-3">On this page</h2>
    <ul v-if="props.toc && props.toc.links">
      <li v-for="link in props.toc.links" :key="link.text">
        <a :href="`#${link.id}`">
          {{ link.text }} 
        </a>
        <ul v-if="link.children">
            <li v-for="child in link.children">
                <a :href="`#${child.id}`">
                    {{ child.text }}
                </a>
            </li>
        </ul>
       
      </li>
    </ul>
  </div>
</template>


<style scoped lang="scss">

ul {
    ul {
        margin-left: 1rem;
    }
}

</style>