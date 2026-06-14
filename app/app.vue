<template>
    <UApp>
      <UMain>
      <SiteNav />
      <NuxtPage />
    </UMain>
  </UApp>
  <SiteFooter />

</template>


<script setup>
umTrackView().then(res => console.log(res.ok));

</script>