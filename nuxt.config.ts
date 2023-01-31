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
                    content: 'Porfolio - Jusa Annevirta'
                },
                { name: 'theme-color', content: '#f9f9f9' },
                { hid: 'og:type', property: 'og:type', content: 'website' },
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: 'Jusa Annevirta'
                },
                {
                    hid: 'og:desc',
                    property: 'og:description',
                    content: 'Porfolio - Jusa Annevirta'
                },
                {
                    hid: 'og:image',
                    property: 'og:image',
                    content: 'https://www.jusaannevirta.com/jusaannevirta.jpeg'
                },
                {
                    hid: 'og:url',
                    property: 'og:url',
                    content: 'https://www.jusaannevirta.com'
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
                { rel: 'manifest', href: '/site.webmanifest' },
                { rel: 'preload', as: 'image', href: '/img/portrait.jpeg' }
            ],
            htmlAttrs: {
                lang: 'en'
            }
        }
    }
})
