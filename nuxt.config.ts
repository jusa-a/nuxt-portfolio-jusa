// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
    content: {
        // https://content.nuxtjs.org/api/configuration
    },
    app: {
        head: {
            title: 'Jusa Annevirta',
            meta: [
                {
                    name: 'description',
                    content: 'Portfolio Jusa',
                },
            ],
        },
    },
})
