<template>
    <!-- render document coming from the query -->
    <Article :article="article" />
</template>

<script setup>
    const nuxtApp = useNuxtApp()
    // fetch document where the document path matches with the current route
    const { path } = useRoute()
    const { data: article } = await useAsyncData(
        `content-${path}`,
        () => queryContent(path).findOne(),
        {
            // this will not refetch if the key exists in the payload
            getCachedData: key =>
                nuxtApp.static.data[key] || nuxtApp.payload.data[key]
        }
    )

    // throw error page if document not found
    if (!article.value) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Page Not Found',
            fatal: true
        })
    }

    // set meta
    useHead({
        title: `Jusa | ${article.value.title}`,
        meta: [
            { name: 'description', content: article.value.description }
            /* {
                hid: 'og:image',
                property: 'og:image',
                content: process.env.baseUrl + article.value.img
            } */
        ]
    })
</script>
