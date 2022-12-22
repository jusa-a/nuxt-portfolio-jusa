// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
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
