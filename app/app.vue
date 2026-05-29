<template>
    <UApp>
      <UMain>
      <SiteNav />
      <BreadCrumbs />
      <NuxtPage />
      <SiteFooter />
    </UMain>
    </UApp>

</template>


<script setup>
umTrackView().then(res => console.log(res.ok));

useSeoMeta({
  title: 'Chris Rosser',
  ogTitle: 'Chris Rosser',
  description: 'Chris Rosser, author, technical writer and developer living in Melbourne, Australia',
  ogDescription: 'Chris Rosser, author, technical writer and developer living in Melbourne, Australia',
  ogImage: '/images/logo.webp',
  twitterCard: 'summary_large_image',
})

</script>

<style>
html, body {
  margin: 0;
}
</style>