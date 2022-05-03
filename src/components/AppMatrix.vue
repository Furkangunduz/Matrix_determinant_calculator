<script setup>
/* eslint-disable */
defineProps(["matrix"]);
</script>
<template>
    <div class="font text-xl">
        <div class="flex" v-for="(row, indxR) of matrix" :key="indxR">
            <div
                class="m-4 flex"
                v-for="(col, indxC) of row"
                :item="indxC"
                :key="indxC"
            >
                <input
                    class="rounded-xl"
                    type="text"
                    v-model="matrix[indxR][indxC]"
                />
            </div>
        </div>
    </div>
</template>
