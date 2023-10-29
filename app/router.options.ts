import type { RouterConfig } from '@nuxt/schema'

// default config: https://github.com/nuxt/framework/blob/main/packages/nuxt/src/pages/runtime/router.options.ts

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
                    resolve({ el: to.hash })
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
