<template>
    <section class="heroContainer flex flex-col">
        <div class="mainHeaderContainer flex flex-wrap justify-between">
            <h1>Jusa</h1>
            <h1 class="text-right grow ml-[8vw]">Annevirta</h1>
        </div>
        <div class="heroImageContainer flex justify-center">
            <img
                class="aspect-[5/6] shrink-0"
                src="/img/portrait.jpeg"
                alt="portrait of me"
                loading="lazy" />
        </div>
        <div class="heroText self-center">
            <p class="p1">{{ data }}</p>
        </div>
    </section>
</template>

<script setup>
    defineProps(['data'])
</script>

<style scoped>
    span {
        background-color: #ad00b0de;
    }
    .heroContainer {
        margin: clamp(64px, 22vh, 300px) auto 15vw;
        max-width: 100%;
        color: #c4c4c4;
        font-size: var(--header-size);
    }

    .mainHeaderContainer > h1 {
        color: #cecece;
        mix-blend-mode: exclusion;
        font-size: inherit;
        line-height: 0.72;
    }

    .heroText {
        margin-top: -0.35em;
        mix-blend-mode: difference;
        width: clamp(40%, 300px, 80vw);
        margin-right: -20%;
    }

    .heroImageContainer {
        margin-top: -0.72em;
        z-index: -1;
        overflow: hidden;
    }

    .heroImageContainer > img {
        position: relative;
        object-fit: cover;
        right: clamp(15.5vw, 90px, 28vw);
        width: clamp(45vw, 20rem, 90vw);
    }
</style>
