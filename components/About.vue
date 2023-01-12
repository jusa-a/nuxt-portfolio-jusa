<template>
    <div class="aboutContainer flex flex-col justify-around">
        <div class="spacer"></div>

        <div>
            <p>
                <span>
                    Excepteur sint obcaecat cupiditat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.Lorem
                    ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
                    tempor incidunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquid ex ea commodi consequat. Quis aute iure
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                </span>
            </p>
        </div>

        <div class="flex items-end justify-between">
            <ul class="uppercase">
                <li>
                    <a class="link" href="#" target="_blank"><span>CV</span></a>
                </li>
                <li>
                    <a
                        class="link"
                        href="https://www.linkedin.com/in/annevirtajusa/"
                        target="_blank">
                        <span>LinkedIn</span>
                    </a>
                </li>
                <li>
                    <a
                        class="link"
                        href="https://www.instagram.com/jusa.a/"
                        target="_blank">
                        <span>Instagram</span>
                    </a>
                </li>
                <li>
                    <a
                        class="link"
                        href="https://github.com/jusa-a"
                        target="_blank">
                        <span>GitHub</span>
                    </a>
                </li>
            </ul>
            <div class="font-serif text-right">
                <p><span>Jusa Annevirta</span></p>
                <p><span>jusa.annevirta@aalto.fi</span></p>
                <p><span>+358 44 252 7741</span></p>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
    .spacer {
        min-height: 35vh;
    }

    .aboutContainer {
        height: 100vh;
        width: clamp(30vw, 23rem, 100vw);
        position: fixed;
        z-index: 998;
        top: 0;
        right: 0;
        padding-right: 3em;
        /* padding-left: 0.5em; */
    }

    /* .aboutContainer > div {
        backdrop-filter: blur(10px);
    } */

    span {
        background-color: #f9f9f9;
    }
</style>
