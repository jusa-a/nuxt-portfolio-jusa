<template>
    <div class="text-center">
        <p>{{ project.title }}</p>
        <NuxtLink :to="`/projects/${project.title}`">
            <p class="my-4">View Project</p>
        </NuxtLink>
    </div>
</template>

<script setup>
    const { project } = defineProps(['project'])
</script>

<style scoped></style>