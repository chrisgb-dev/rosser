<template>
    <div class="meander"></div>
</template>

<style scoped>
.meander {
    padding: 0;
    min-height: 3rem;
    background-image: url(~/assets/images/meander.svg);
    background-repeat: repeat-x;
}

@media (prefers-color-scheme: dark) {
    .meander {
        background-image: url(~/assets/images/meander-light.svg);
    }
}

</style>
