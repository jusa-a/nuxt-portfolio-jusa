<template>
    <div class="flex justify-center items-center h-screen">
        <div class="max-w-sm text-center">
            <p class="font-sans text-7xl">
                {{ error.statusCode }}
            </p>
            <p class="mt-7 text-4xl">Ooops.</p>
            <p class="mt-7">
                {{ error.message }}
            </p>
            <a class="mt-32" @click="handleError">Go Back Home</a>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        error: Object
    })

    const handleError = () => clearError({ redirect: '/' })
</script>

<style scoped></style>
