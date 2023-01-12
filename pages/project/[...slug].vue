<template>
    <div>
        <div>
            <h1>{{ project.title }}</h1>
            <img :src="`/${project.img}`" :alt="project.title" />
            <p>
                {{ project.year }}
                <br />
                <template
                    v-for="(discipline, n) in project.disciplines"
                    :key="n">
                    {{ discipline }}
                    <br />
                </template>
            </p>
        </div>

        <ContentRenderer :value="project">
            <ContentRendererMarkdown :value="project" />
        </ContentRenderer>
    </div>
</template>

<script setup>
    // fetch document where the document path matches with the current route
    const { path } = useRoute()
    const { data: project } = await useAsyncData(`content-${path}`, () =>
        queryContent().where({ _path: path }).findOne()
    )

    if (!project.value) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Project not found',
            fatal: true
        })
    }

    useHead({
        title: `Jusa | ${project.value.title}`,
        meta: [
            { name: 'description', content: project.value.description }
            /* {
                hid: 'og:image',
                property: 'og:image',
                content: `https://site.com/${project.value.img}`
            } */
        ]
    })
</script>

<style scoped></style>
