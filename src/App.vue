/* eslint-disable */
<script setup>
import AppMatrix from "./components/AppMatrix.vue";
import AppMatrixInput from "./components/AppMatrixInput.vue";
import determinant from "./Determinant";

import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

const userMatrix = ref([]);
const result = ref(0);
const isSolved = ref(false);

const isSizeValid = computed(() => {
    return userMatrix.value.length > 1;
});

const solve = () => {
    result.value = determinant(userMatrix.value);
    isSolved.value = true;
};

const setSize = (size) => {
    isSolved.value = false;

    let s = parseInt(size);
    userMatrix.value = [...Array(s).fill(0)].map(() => Array(s).fill(0));
};
</script>

<template>
    <div class="h-full flex justify-center bg-orange-300">
        <div class="flex flex-col mt-8 gap-6 justify-center items-center">
            <app-matrix-input :set-size="setSize" />
            <app-matrix v-if="isSizeValid" :matrix="userMatrix" />
            <button v-if="isSizeValid" @click="solve">Solve</button>
            <div v-if="isSolved">The Answer is =>> {{ result }}</div>
        </div>
    </div>
</template>
