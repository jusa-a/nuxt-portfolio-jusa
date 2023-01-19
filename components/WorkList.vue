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
        <ContentList v-slot="{ list }" path="/work">
            <div class="flex flex-wrap justify-between items-center gap-[4vw]">
                <template v-for="work in list" :key="work._path">
                    <NuxtLink :to="work._path" class="workCard">
                        <img
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

<script setup>
    defineProps(['data'])
</script>

<style scoped>
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
