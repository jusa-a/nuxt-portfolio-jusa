<template>
    <div>
        <ProjectDetails :name="name" />
    </div>
</template>

<script setup>
    /* definePageMeta({
        layout: 'projects'
    }) */

    const { name } = useRoute().params

    if (!name) {
        throw createError({ statusCode: 404, statusMessage: 'Project not found', fatal: true })
    }
</script>

<style scoped></style>