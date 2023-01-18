<template>
    <div class="flex flex-wrap justify-between items-start gap-[1em]">
        <template v-for="img in images" :key="img">
            <nuxt-img format="webp" :src="`/${img}`" :alt="img" />
        </template>
    </div>
</template>

<script setup>
    defineProps(['images'])
</script>

<style scoped>
    img {
        width: clamp(48%, 235px, 100%);
    }

    img:nth-child(even) {
        margin-left: auto;
    }
</style>
