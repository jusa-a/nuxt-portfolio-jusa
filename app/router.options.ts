import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
    scrollBehavior(to, from, savedPosition) {
        const nuxtApp = useNuxtApp()

        if (savedPosition) {
            return new Promise(resolve => {
                nuxtApp.hook('page:finish', () => {
                    resolve(savedPosition)
                })
            })
        }

        if (to.hash && from.path === '/') {
            // return { el: to.hash, behavior: 'smooth' }
            return new Promise(resolve => {
                setTimeout(
                    () => resolve({ el: to.hash, behavior: 'smooth' }),
                    10
                )
            })
        }

        if (to.hash) {
            return new Promise(resolve => {
                nuxtApp.hook('page:finish', () => {
                    setTimeout(() => resolve({ el: to.hash }), 10)
                })
            })
        }

        return new Promise(resolve => {
            nuxtApp.hook('page:finish', () => {
                resolve({ top: 0 })
            })
        })
    }
}
