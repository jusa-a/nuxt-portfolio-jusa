<template>
    <!-- Main Hero -->
    <MainHero :content="content.hero" />
    <!-- List of all projects -->
    <ProjectList :content="content.projects" :projects="projects" />
    <!-- List of all works -->
    <WorkList :content="content.works" :works="works" />
</template>

<script setup>
    const content = useState('content')
    const projects = useState('projects')
    const works = useState('works')

    if (!content.value) {
        const { data } = await useAsyncData('data', () =>
            queryContent('/').only(['hero', 'projects', 'works']).findOne()
        )
        content.value = data.value
    }

    if (!projects.value) {
        const { data } = await useAsyncData('projects', () =>
            queryContent('/project')
                .only(['title', 'img', 'year', 'disciplines', '_path'])
                .find()
        )
        projects.value = data.value
    }

    if (!works.value) {
        const { data } = await useAsyncData('works', () =>
            queryContent('/work').only(['title', 'img', 'year', '_path']).find()
        )
        works.value = data.value
    }
</script>
