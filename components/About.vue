<template>
    <section class="aboutContainer flex flex-col justify-around">
        <div class="spacer bg-transparent grow-[3]"></div>

        <div class="grow">
            <p v-for="(p, n) in about.bio" :key="n">
                {{ p }}
                <br />
                <br />
            </p>
        </div>

        <div class="flex items-end justify-between grow-0">
            <ul class="uppercase">
                <li v-for="(link, n) in about.links" :key="n">
                    <a class="link" :href="link.url" target="_blank">
                        {{ link.name }}
                    </a>
                </li>
            </ul>
            <div class="font-serif text-right">
                <p v-for="(c, n) in about.contact" :key="n">{{ c }}</p>
            </div>
        </div>
    </section>
</template>

<script setup>
    const { data: about } = await useAsyncData('about', () =>
        queryContent('/about').only(['bio', 'contact', 'links']).findOne()
    )
</script>

<style scoped>
    .aboutContainer {
        height: 100%;
        width: clamp(32vw, 25rem, 97vw);
        position: fixed;
        z-index: 998;
        top: 0;
        right: 0;
        padding-right: 2em;
        background-color: #5bff1aeb;
        padding-left: 0.5em;
    }
</style>
