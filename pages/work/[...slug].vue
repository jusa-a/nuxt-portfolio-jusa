<template>
    <!-- render document coming from the query -->
    <ContentRenderer :value="work">
        <Article :article="work" />
    </ContentRenderer>
</template>

<script setup>
    // fetch document where the document path matches with the current route
    const { path } = useRoute()
    const { data: work } = await useAsyncData(`content-${path}`, () =>
        queryContent(path).findOne()
    )

    // throw error page if document not found
    if (!work.value) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Work not found',
            fatal: true
        })
    }

    // set meta
    useHead({
        title: `Jusa | ${work.value.title}`,
        meta: [
            { name: 'description', content: work.value.description }
            /* {
                hid: 'og:image',
                property: 'og:image',
                content: process.env.baseUrl + work.value.img
            } */
        ]
    })
</script>

<style scoped></style>
