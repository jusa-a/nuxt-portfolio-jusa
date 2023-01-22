<template>
    <article class="min-h-screen">
        <div class="articleTitle flex">
            <h1 class="">{{ article.title }}</h1>
        </div>

        <div class="articleWrapper">
            <div class="articleHero">
                <div class="flex flex-row-reverse flex-wrap">
                    <div class="heroImg">
                        <img
                            :src="`/${article.img}`"
                            :alt="article.title"
                            class="object-cover w-[100%]" />
                    </div>

                    <div
                        class="articleInfo self-end mr-[1vw] mt-[1vw] text-right">
                        <p class="p2 whitespace-nowrap">
                            {{ article.year }}
                            <br />
                            <template
                                v-for="(discipline, n) in article.disciplines"
                                :key="n">
                                {{ discipline }}
                                <br />
                            </template>
                        </p>
                    </div>
                </div>
            </div>
            <section class="articleContent">
                <ContentRenderer :value="article" />
            </section>
        </div>
    </article>
</template>

<script setup>
    defineProps(['article'])
</script>

<style scoped>
    article {
        margin-top: clamp(64px, 17vh, 300px);
    }
    .articleTitle {
        color: #fff;
        mix-blend-mode: difference;
        width: clamp(65%, 400px, 100%);
        margin: auto;
    }

    .articleTitle > h1 {
        font-size: clamp(3.1rem, 7vw, 12rem);
        margin-bottom: -0.88em;
        width: 5em;
    }

    .articleWrapper {
        margin: auto;
        padding-left: 3vw;
        width: clamp(55%, 450px, 100vw);
    }

    .articleHero {
        margin-bottom: 1em;
    }

    .heroImg {
        width: clamp(79%, 400px, 85%);
    }
</style>

<style>
    .articleContent > div {
        @apply flex flex-col;
    }

    .articleContent h1,
    .articleContent h2,
    .articleContent h3 {
        @apply -tracking-normal;
        width: 90%;
        margin-top: 2em;
    }

    .articleContent p {
        @apply self-end;
        width: clamp(300px, 90%, 1000px);
        margin-top: 1em;
        /* margin-bottom: 1em; */
    }

    .articleContent a {
        @apply font-light font-sans underline;
        text-decoration-thickness: from-font;
        line-height: 1.2;
        transform: skewX(-10deg);
    }

    .articleContent ul,
    .articleContent ol {
        @apply font-serif list-[revert];
        font-size: clamp(1.1rem, 1.4vw, 2rem);
        width: 90%;
    }
</style>
