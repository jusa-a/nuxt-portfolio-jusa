<template>

    <div class="mainNavContainer">
        <nav class="mainNav flex justify-end">
            <ul class="flex gap-4 flex-col">
                <li @click="showAbout = !showAbout">
                    <a href="#"
                       :class="expanded"
                       title="about">about</a>
                </li>
                <li>
                    <NuxtLink to="/projects"
                              title="projects">projects</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/works"
                              title="works">works</NuxtLink>
                </li>
            </ul>
        </nav>
    </div>

    <transition name="about">
        <About v-show="showAbout"></About>
    </transition>

</template>

<script setup>
    const showAbout = ref(false)

    const expanded = computed(() => {
        return {
            linkActive: showAbout.value
        }
    }
    )
</script>


<style scoped>
    .mainNavContainer {
        position: -webkit-sticky;
        position: sticky;
        top: 5px;
        z-index: 999;
        mix-blend-mode: difference;
        color: #fff;
    }

    .mainNav a {
        @apply font-sans text-6xl text-center uppercase font-light tracking-tight;
        display: inline-block;
    }

    .mainNav a:hover {
        font-weight: 400;
    }

    .mainNav a:active {
        transition: font-weight 0.1s ease-in-out;
        font-weight: 300;
    }

    .about-enter-active,
    .about-leave-active {
        transition: all 0.5s ease-out;
    }

    .about-enter-from,
    .about-leave-to {
        transform: translateX(100%);
        transition: all 150ms ease-in 0s
    }

</style>