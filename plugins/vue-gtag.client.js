import VueGtag, { trackRouter } from 'vue-gtag-next'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(VueGtag, {
        property: {
            id: 'G-4SZBS3KJR8'
        }
    })
    trackRouter(useRouter())
})
