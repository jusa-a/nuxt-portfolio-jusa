<template>
    <div>
        <p>{{ name }}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quisquam!</p>
    </div>
</template>

<script setup>
    const { name } = defineProps(['name'])
</script>

<style scoped></style>