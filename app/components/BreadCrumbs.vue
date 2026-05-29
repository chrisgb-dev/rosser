<template>
    <div v-if="getBreadcrumbs().length > 1" class="breadcrumbs text-sm ml2 md:ml-6">
        <ul>
            <li>
                <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li v-for="crumb in getBreadcrumbs()">
                <NuxtLink :to="crumb.path">{{ crumb.title }}</NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { capitalize } from 'vue';
const route = useRoute();



const getBreadcrumbs = () => {
    
    const fullPath = route.path
    const requestPath = fullPath.startsWith("/")
        ? fullPath.substring(1)
        : fullPath;
    const crumbs = requestPath.split("/").slice(0,-1);
    const breadcrumbs = [];
    let path = "";

    crumbs.forEach((crumb) => {
    if (crumb) {
      path = `${path}/${crumb}`;
      let title = capitalize(crumb)
        breadcrumbs.push({
            "path" : path,
            "title": title
        });
    }
  });

    return breadcrumbs;
};



</script>