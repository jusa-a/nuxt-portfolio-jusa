<template>
    <!-- Main Hero -->
    <MainHero :data="data.hero" />
    <!-- List of all projects -->
    <ProjectList :data="data.projects" />
    <!-- List of all works -->
    <WorkList :data="data.works" />
</template>

<script setup>
    const { data } = await useAsyncData('data', () =>
        queryContent('/').findOne()
    )
    console.log(data)
</script>

<style scoped></style>
