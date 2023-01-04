<template>
    <div>
        <ContentRenderer :value="project">
            <ContentRendererMarkdown :value="project" />
        </ContentRenderer>
    </div>
</template>

<script setup>
    /*  const slug = useRoute().params.slug.toString().replace(/,/g, "/");
     const { data: project } = await useAsyncData(slug, () => {
         return queryContent(slug).findOne();
     });
  */
    const { path } = useRoute()
    const { data: project } = await useAsyncData(`content-${path}`, () => queryContent().where({ _path: path }).findOne())

    if (!project.value) {
        throw createError({ statusCode: 404, statusMessage: 'Project not found', fatal: true })
    }
</script>

<style scoped></style>