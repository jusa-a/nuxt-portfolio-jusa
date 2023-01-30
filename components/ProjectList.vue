<template>
    <div id="projects" class="anchor"></div>
    <section class="sectionContainer">
        <h1 class="text-end">Projects</h1>
        <div class="sectionDesc">
            <p class="p1">
                {{ data }}
            </p>
        </div>

        <!-- Render list of all articles in ./content/project using `path` -->
        <ContentList v-slot="{ list }" path="/project">
            <div class="projectsContainer flex flex-col">
                <template v-for="project in list" :key="project._path">
                    <NuxtLink :to="project._path" class="projectCard flex">
                        <div class="projectThumb">
                            <img
                                :src="`/${project.img}`"
                                :alt="project.title"
                                loading="lazy"
                                class="object-cover w-[100%]" />
                        </div>
                        <div
                            class="projectDetails flex flex-col justify-between">
                            <div class="w-max">
                                <p class="p2">
                                    {{ project.year }}
                                    <br />
                                    <br />
                                    <template
                                        v-for="(
                                            discipline, n
                                        ) in project.disciplines"
                                        :key="n">
                                        {{ discipline }}
                                        <br />
                                    </template>
                                </p>
                            </div>
                            <h2 class="projectTitle w-min">
                                {{ project.title }}
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
    .projectsContainer {
        gap: calc(7vw + 10vh);
    }

    .projectCard:nth-child(odd) {
        @apply flex-row-reverse text-right;
    }

    .projectCard:nth-child(odd) .projectDetails {
        @apply items-end;
    }

    .projectThumb {
        width: clamp(30vw, 300px, 100%);
    }
</style>
