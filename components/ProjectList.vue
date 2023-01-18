<template>
    <div id="projects" class="anchor"></div>
    <section class="projectsContainer">
        <h1 class="text-end">Projects</h1>
        <div class="projectsDesc">
            <p class="p1">
                Excepteur sint obcaecat cupiditat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Lorem ipsum
                dolor sit amet, consectetur adipisci elit, sed eiusmod tempor
                incidunt ut labore et dolore magna aliqua.
            </p>
        </div>

        <!-- Render list of all articles in ./content/project using `path` -->
        <ContentList v-slot="{ list }" path="/project">
            <div class="flex flex-col gap-[10vw]">
                <template v-for="project in list" :key="project._path">
                    <NuxtLink :to="project._path" class="projectCard flex">
                        <div class="projectThumb">
                            <nuxt-img
                                format="webp"
                                :src="`/${project.img}`"
                                :alt="project.title"
                                class="object-cover w-[100%]" />
                        </div>
                        <div
                            class="projectDetails flex flex-col justify-between w-min">
                            <div>
                                <p
                                    class="font-sans font-light italic leading-none">
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
                            <h2 class="projectTitle">
                                {{ project.title }}
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
    .projectsContainer {
        padding: 10vw 0 10vw;
        margin: auto;
        width: clamp(70%, 500px, 100vw);
    }

    .projectsDesc {
        width: clamp(49%, 380px, 100vw);
        margin: 1vw 0 5vw;
    }

    .projectCard:nth-child(odd) {
        @apply flex-row-reverse text-right;
    }

    .projectThumb {
        width: clamp(35vw, 300px, 100%);
    }
</style>
