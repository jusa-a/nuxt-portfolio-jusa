<template>
    <div id="works" class="anchor"></div>
    <section class="sectionContainer flex flex-col">
        <h1>Works</h1>
        <div class="sectionDesc text-end self-end">
            <p class="p1">
                {{ data }}
            </p>
        </div>

        <!-- Render list of all articles in ./content/work using `path` -->
        <ContentList
            v-slot="{ list }"
            path="/work"
            :query="{
                only: ['title', 'img', 'year', '_path']
            }">
            <div
                class="worksContainer flex flex-wrap justify-between items-center">
                <template v-for="work in list" :key="work._path">
                    <NuxtLink :to="work._path" class="workCard">
                        <img
                            :src="`/${work.img}`"
                            :alt="work.title"
                            loading="lazy"
                            class="workThumb" />
                        <div class="workDetails flex justify-between">
                            <div>
                                <p class="p2">
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

<script setup>
    defineProps(['data'])
</script>

<style scoped>
    .worksContainer {
        row-gap: 4vh;
        column-gap: 1vw;
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
