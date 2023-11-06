<template>
    <!-- Main Hero -->
    <MainHero :content="content.hero" />
    <!-- List of all projects -->
    <ProjectList :content="content.projects" :projects="projects" />
    <!-- List of all works -->
    <WorkList :content="content.works" :works="works" />
</template>

<script setup>
    const nuxtApp = useNuxtApp()

    const { data: content } = await useAsyncData(
        'content',
        () => queryContent('/').only(['hero', 'projects', 'works']).findOne(),
        {
            // this will not refetch if the key exists in the payload
            getCachedData: key =>
                nuxtApp.static.data[key] || nuxtApp.payload.data[key]
        }
    )

    const { data: projects } = await useAsyncData(
        'projects',
        () =>
            queryContent('/project')
                .only(['title', 'img', 'year', 'disciplines', '_path'])
                .find(),
        {
            // this will not refetch if the key exists in the payload
            getCachedData: key =>
                nuxtApp.static.data[key] || nuxtApp.payload.data[key]
        }
    )

    const { data: works } = await useAsyncData(
        'works',
        () =>
            queryContent('/work')
                .only(['title', 'img', 'year', '_path'])
                .find(),
        {
            // this will not refetch if the key exists in the payload
            getCachedData: key =>
                nuxtApp.static.data[key] || nuxtApp.payload.data[key]
        }
    )
</script>
