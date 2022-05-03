<script setup>
/* eslint-disable */
import { ref } from "@vue/reactivity";

const size = ref(0);
const props = defineProps(["setSize"]);
</script>
<template>
    <div class="flex gap-6 justify-center items-center">
        <p class="bg-slate-200 bg-opacity-70 p-4 rounded-lg">
            Please write your matrix size.
        </p>
        <input
            @keydown.enter="setSize(size)"
            v-model="size"
            type="number"
            name=""
            id=""
            min="0"
            max="10"
        />
        <button @click="setSize(size)">Create</button>
    </div>
</template>
