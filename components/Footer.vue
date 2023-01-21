<template>
    <footer>
        <div class="footerContent">
            <p>2023, All rights reserved</p>
            <p>©Jusa Annevirta</p>
        </div>
    </footer>
</template>

<script setup></script>

<style scoped>
    .footerContent {
        @apply flex flex-row-reverse justify-between flex-wrap-reverse content-start h-[10vh];
    }

    p {
        @apply font-sans uppercase;
    }
</style>
