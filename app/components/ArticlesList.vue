<template>
      <ContentList :query="query" v-slot="{ list }">
        <div  class="grid grid-cols-1 md:grid-cols-4 gap-4 px-2 md:px-6">
          <div v-for="article in list" :key="article._path">
          <NuxtLink :to="article._path">
            <div class="card bg-base-100 image-full shadow-xl">
              <div class="card-body">
                <h2 class="card-title">{{ article.title }}</h2>
                <p>{{ article.description }}</p>
              </div>
            </div>
          </NuxtLink>
          </div>
        </div>
    </ContentList>

  </template>
  
<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const props = defineProps(['path'])


const query: QueryBuilderParams = { 
    path: props.path,
    where: [
      // { _file: {$regex : `/index.md` } },
      { _file: {$ne : `${props.path.slice(1)}/index.md`}}
    ],
    // limit: 5, 
    sort: [{ title: 1 }] 
  }


</script>