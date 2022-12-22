<template>
    <div>
        <div class="">
            <div v-for="p in projects">
                <ProjectCard :project="p" />
            </div>
        </div>
    </div>
</template>

<script setup>
    /* definePageMeta({
        layout: 'projects'
    }) */

    const projects = [
        {
            title: "project for testing",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem laborum qui dignissimos tempore perspiciatis, officiis maiores a deserunt eveniet doloremque.",
            id: 1
        }
    ]

    useHead({
        title: 'Jusa Annevirta | Projects'
    })
</script>

<style scoped></style>