<template>

    <div class="heroContainer">
        <div class="mainHeaderContainer flex flex-wrap justify-between ">
            <h1>Jusa</h1>
            <h1 class="text-right grow ml-[8vw]">Annevirta</h1>
        </div>
        <div class="heroImageContainer flex justify-center">
            <img class="aspect-[5/6] shrink-0"
                 src=""
                 alt="">
        </div>
        <div class="heroText flex justify-center">
            <p class="p1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur nisi sequi optio hic vero incidunt sed explicabo quasi, aperiam natus!</p>
        </div>
    </div>

    <div class="projectsContainer"
         id="projects">
        <h1 class="text-end">Projects</h1>
        <div class="projectsDesc">
            <p class="p1">Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
        </div>
        <div>

            <div class="projectCard right flex">
                <img class="projectThumb aspect-[4/3]" />
                <div class="projectDetails flex flex-col justify-between">
                    <div>
                        <p class="font-sans font-light italic leading-none">
                            2022
                            <br><br>
                            Category 1
                            <br>
                            Category 2
                        </p>
                    </div>
                    <h2 class="projectTitle">
                        First
                        <br>
                        project
                    </h2>
                </div>
            </div>

            <div class="projectCard flex">
                <img class="projectThumb aspect-[4/4]" />
                <div class="projectDetails flex flex-col justify-between">
                    <div>
                        <p class="font-sans font-light italic leading-none">
                            2022
                            <br><br>
                            Category 1
                            <br>
                            Category 2
                        </p>
                    </div>
                    <h2 class="projectTitle">
                        Second
                        <br>
                        project
                    </h2>
                </div>
            </div>

        </div>
    </div>

    <div class="worksContainer min-h-screen"
         id="works">
        <h1>Works</h1>
        <div>

        </div>
    </div>

</template>

<script setup>

</script>

<style scoped>
    .heroContainer {
        /* margin-top: calc(28vw + 7vh); */
        margin: clamp(64px, 22vh, 300px) auto 50px;
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

    .heroImageContainer>img {
        position: relative;
        /* right: 15.5vw; */
        /* right: calc(1.5 * var(--header-size)); */
        right: clamp(15.5vw, 90px, 28vw);
        /* width: calc(4.54 * var(--header-size)); */
        width: clamp(45vw, 20rem, 100vw);

        background-color: rgb(94, 94, 94);
    }

    .projectsContainer,
    .worksContainer {
        padding-top: 20vw;
        margin: auto;
        width: clamp(70%, 500px, 100vw);
    }

    .projectsDesc {
        width: clamp(49%, 380px, 100vw);
    }

    .projectCard {
        margin: 5vw 0 10vw;
        /* width: clamp(200px, 50%, 1000px); */
    }

    .projectCard.right {
        @apply flex-row-reverse text-right;
    }

    .projectThumb {
        width: clamp(35vw, 300px, 100vw);
        background-color: rgb(94, 94, 94);
        object-fit: cover;
    }

</style>