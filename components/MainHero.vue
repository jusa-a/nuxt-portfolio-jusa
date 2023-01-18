<template>
    <section class="heroContainer flex flex-col">
        <div class="mainHeaderContainer flex flex-wrap justify-between">
            <h1>Jusa</h1>
            <h1 class="text-right grow ml-[8vw]">Annevirta</h1>
        </div>
        <div class="heroImageContainer flex justify-center">
            <nuxt-img
                format="webp"
                class="aspect-[5/6] shrink-0"
                alt="portrait of me"
                src="/img/portrait.jpeg" />
        </div>
        <div class="heroText self-center">
            <p class="p1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aspernatur nisi sequi optio hic vero incidunt sed explicabo
                quasi, aperiam natus!
            </p>
        </div>
    </section>
</template>

<script setup></script>

<style scoped>
    .heroContainer {
        margin: clamp(64px, 22vh, 300px) auto 15vw;
        color: #fff;
        font-size: var(--header-size);
    }

    .mainHeaderContainer > h1 {
        mix-blend-mode: difference;
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
