<template>
    <div class="draw">
        <header>DRAW <i class="flower">🌸🌼🌺</i></header>
        <div class="content">
            <!-- <div v-for="item in "></div> -->
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    data() {
        const xCount = 50;
        const yCount = 50;
        const data = [];
        for (let i = 0; i < xCount; i++) {
            for (let j = 0; j < yCount; j++) {
                data[i][j].push({color: '#fff'});
            }
        }
        return {
            bundler: 'Parcel',
            data
        }
    },
    mounted() {
        console.log(this.data);
    }
})
</script>

<style lang="scss" scoped>
.container {
    color: green;
}
</style>