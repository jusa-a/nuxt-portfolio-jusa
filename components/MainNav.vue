<template>
    <nav class="mainNavContainer">
        <div class="mainNav flex justify-between">
            <button
                :class="expanded"
                class="navLink"
                title="about"
                @click="showAbout = !showAbout">
                about
            </button>
            <NuxtLink to="/#projects" class="navLink" title="projects">
                projects
            </NuxtLink>
            <NuxtLink to="/#works" class="navLink" title="works">
                works
            </NuxtLink>
        </div>
    </nav>

    <transition name="about">
        <About v-show="showAbout" />
    </transition>
</template>

<script setup>
    const showAbout = ref(false)

    const expanded = computed(() => {
        return {
            linkActive: showAbout.value
        }
    })
</script>

<style scoped>
    .mainNavContainer {
        position: sticky;
        width: 100%;
        top: 0.1vw;
        z-index: 999;
        overflow: hidden;
        mix-blend-mode: difference;
        color: #c4c4c4;
    }

    .navLink {
        @apply font-sans text-center uppercase tracking-tight;
        display: inline-block;
        font-size: clamp(1.6rem, 3.2vw, 7rem);
        line-height: 0.825;
    }

    @media (hover: hover) {
        .navLink:hover {
            font-weight: 500;
            transform: skewX(-10deg);
        }
    }

    .navLink:active {
        transition: font-weight 0.1s ease-in-out;
        font-weight: normal;
    }

    .linkActive {
        transform: skewX(-10deg);
    }

    .about-enter-active,
    .about-leave-active {
        transition: all 0.5s ease-out;
    }

    .about-enter-from,
    .about-leave-to {
        transform: translateX(100%);
        transition: all 150ms ease-in 0s;
    }
</style>
