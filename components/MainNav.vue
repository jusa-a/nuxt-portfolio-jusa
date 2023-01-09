<template>

    <div class="mainNavContainer">
        <nav class="mainNav flex justify-between">
            <a :class="expanded"
               class="navLink"
               @click="showAbout = !showAbout"
               title="about">about</a>
            <a href="#projects"
               class="navLink"
               title="projects">projects</a>
            <a href="#works"
               class="navLink"
               title="works">works</a>

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
        top: 0px;
        z-index: 999;
        overflow: hidden;
        mix-blend-mode: difference;
        color: #fff;
    }

    .navLink {
        @apply font-sans text-center uppercase tracking-tight;
        display: inline-block;
        font-size: clamp(1.6rem, 3.2vw, 7rem);
        line-height: 0.825;
    }

    .navLink:hover {
        font-weight: 500;
    }

    .navLink:active {
        transition: font-weight 0.1s ease-in-out;
        font-weight: normal;
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