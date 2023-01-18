<template>
    <article>
        <div class="articleTitle flex">
            <h1 class="">{{ article.title }}</h1>
        </div>

        <div class="articleWrapper">
            <div class="articleHero">
                <div class="flex flex-row-reverse">
                    <div class="heroImg">
                        <nuxt-img
                            format="webp"
                            :src="`/${article.img}`"
                            :alt="article.title"
                            class="object-cover w-[100%]" />
                    </div>

                    <div class="articleInfo self-end mr-[1vw] text-right">
                        <p
                            class="font-sans font-light italic leading-none whitespace-nowrap">
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
                <ContentRendererMarkdown :value="article" />
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
        width: clamp(75%, 400px, 100vw);
        margin: auto;
    }

    .articleTitle > h1 {
        margin-bottom: -0.88em;
        width: 50%;
    }

    .articleWrapper {
        margin: auto;
        padding-left: 3vw;
        width: clamp(60%, 400px, 100vw);
    }

    .articleHero {
        margin-bottom: 1em;
    }

    .heroImg {
        width: 80%;
    }
</style>

<style>
    .articleContent > div {
        @apply flex flex-col;
    }

    .articleContent h1,
    .articleContent h2,
    .articleContent h3 {
        width: 83%;
        margin-top: 1em;
    }

    .articleContent p {
        @apply self-end p1;
        /* width: clamp(90%, 360px, 95%); */
        width: 87%;
        margin-top: 1em;
        margin-bottom: 1em;
    }
</style>
