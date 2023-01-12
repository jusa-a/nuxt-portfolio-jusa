<template>
    <div>
        <div class="heroContainer">
            <div class="mainHeaderContainer flex flex-wrap justify-between">
                <h1>Jusa</h1>
                <h1 class="text-right grow ml-[8vw]">Annevirta</h1>
            </div>
            <div class="heroImageContainer flex justify-center">
                <img
                    class="aspect-[5/6] shrink-0"
                    alt="portrait of me"
                    src="/img/portrait.jpeg" />
            </div>
            <div class="heroText flex justify-center">
                <p class="p1">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Aspernatur nisi sequi optio hic vero incidunt sed explicabo
                    quasi, aperiam natus!
                </p>
            </div>
        </div>

        <div id="projects" class="projectsContainer">
            <h1 class="text-end">Projects</h1>
            <div class="projectsDesc">
                <p class="p1">
                    Excepteur sint obcaecat cupiditat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum. Lorem
                    ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
                    tempor incidunt ut labore et dolore magna aliqua.
                </p>
            </div>

            <ContentList v-slot="{ list }" path="/project">
                <div class="flex flex-col gap-[10vw]">
                    <template v-for="project in list" :key="project._path">
                        <NuxtLink :to="project._path" class="projectCard flex">
                            <div class="projectThumb">
                                <img
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
        </div>

        <div id="works" class="worksContainer flex flex-col">
            <h1>Works</h1>
            <div class="worksDesc text-end self-end">
                <p class="p1">
                    Excepteur sint obcaecat cupiditat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum. Lorem
                    ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
                    tempor incidunt ut labore et dolore magna aliqua.
                </p>
            </div>

            <ContentList v-slot="{ list }" path="/work">
                <div
                    class="flex flex-wrap justify-between items-center gap-[4vw]">
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
                                <h3 class="workTitle text-end">
                                    {{ work.title }}
                                </h3>
                            </div>
                        </NuxtLink>
                    </template>
                </div>
            </ContentList>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
    .heroContainer {
        /* margin-top: calc(28vw + 7vh); */
        margin: clamp(64px, 22vh, 300px) auto 15vw;
    }

    .mainHeaderContainer h1 {
        mix-blend-mode: difference;
        color: #fff;
        font-size: var(--header-size);
        line-height: 0.72;
    }

    .heroText {
        position: relative;
        top: calc(-1.2 * var(--header-size));
        mix-blend-mode: difference;
        color: #fff;
    }

    .heroText p {
        width: clamp(40%, 300px, 80vw);
        position: relative;
        right: -10%;
    }

    .heroImageContainer {
        position: relative;
        top: calc(-0.72 * var(--header-size));
        /* left: calc(1.16 * var(--header-size)); */
        /* right: clamp(10vw, 1rem, -100vw); */
        z-index: -1;
        overflow: hidden;
    }

    .heroImageContainer > img {
        position: relative;
        object-fit: cover;
        /* right: 15.5vw; */
        /* right: calc(1.5 * var(--header-size)); */
        right: clamp(15.5vw, 90px, 28vw);
        /* width: calc(4.54 * var(--header-size)); */
        width: clamp(45vw, 20rem, 90vw);
    }

    .projectsContainer,
    .worksContainer {
        padding: 10vw 0 10vw;
        margin: auto;
        width: clamp(70%, 500px, 100vw);
    }

    .projectsDesc,
    .worksDesc {
        width: clamp(49%, 380px, 100vw);
        margin: 1vw 0 5vw;
    }

    .projectCard:nth-child(odd) {
        @apply flex-row-reverse text-right;
    }

    .workCard {
        width: clamp(45%, 290px, 100%);
    }

    .workCard:nth-child(even) {
        margin-left: auto;
    }

    .projectThumb {
        width: clamp(35vw, 300px, 100%);
    }

    .workThumb {
        width: 100%;
        background-color: #c2c2c2;
        object-fit: cover;
    }
</style>
