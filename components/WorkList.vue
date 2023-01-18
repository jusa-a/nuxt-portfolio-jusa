<template>
    <div id="works" class="anchor"></div>
    <section class="worksContainer flex flex-col">
        <h1>Works</h1>
        <div class="worksDesc text-end self-end">
            <p class="p1">
                Excepteur sint obcaecat cupiditat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Lorem ipsum
                dolor sit amet, consectetur adipisci elit, sed eiusmod tempor
                incidunt ut labore et dolore magna aliqua.
            </p>
        </div>

        <!-- Render list of all articles in ./content/work using `path` -->
        <ContentList v-slot="{ list }" path="/work">
            <div class="flex flex-wrap justify-between items-center gap-[4vw]">
                <template v-for="work in list" :key="work._path">
                    <NuxtLink :to="work._path" class="workCard">
                        <nuxt-img
                            format="webp"
                            :src="`/${work.img}`"
                            :alt="work.title"
                            class="workThumb" />
                        <div class="workDetails flex justify-between">
                            <div>
                                <p
                                    class="font-sans font-light italic leading-none">
                                    {{ work.year }}
                                </p>
                            </div>
                            <h2 class="h3 workTitle text-end">
                                {{ work.title }}
                            </h2>
                        </div>
                    </NuxtLink>
                </template>
            </div>
        </ContentList>
    </section>
</template>

<script setup></script>

<style scoped>
    .worksContainer {
        padding: 10vw 0 10vw;
        margin: auto;
        width: clamp(70%, 500px, 100vw);
    }

    .worksDesc {
        width: clamp(49%, 380px, 100vw);
        margin: 1vw 0 5vw;
    }

    .workCard {
        width: clamp(45%, 290px, 100%);
    }

    .workCard:nth-child(even) {
        margin-left: auto;
    }

    .workThumb {
        width: 100%;
        background-color: #c2c2c2;
        object-fit: cover;
    }
</style>
