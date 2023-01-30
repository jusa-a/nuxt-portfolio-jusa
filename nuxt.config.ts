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
                    content: 'Portfolio Jusa'
                }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                {
                    rel: 'apple-touch-icon',
                    sizes: '180x180',
                    href: '/apple-touch-icon.png'
                },
                { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' },
                { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' },
                { rel: 'manifest', href: '/site.webmanifest' }
            ],
            htmlAttrs: {
                lang: 'en'
            }
        }
    }
})
