<template>
    <div class="draw">
        <div class="draw-content">
            <header>DRAW <i class="flower">🌸🌼🌺</i></header>
            <div class="content">
                <div v-for="(item, index) in data" :key="item.id">
                    <div v-for="(sItem, sIndex) in data[index]" :key="sItem.id" :style="{ background: sItem.color }">
                    </div>
                </div>
            </div>
        </div>
        <div class="result">
            <header>结果</header>
            <carousel></carousel>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import carousel from './carousel.vue';

export default Vue.extend({
    components: {
        'carousel': carousel
    },
    data() {
        const xCount = 50;
        const yCount = 50;
        const data = [];
        for (let i = 0; i < xCount; i++) {
            data.push([]);
            for (let j = 0; j < yCount; j++) {
                data[i].push({ color: '#ccc' });
            }
        }
        data[10][15] = {color: 'white'};
        data[40][15] = {color: 'white'};
        data[25][40] = {color: 'white'};
        data[24][39] = {color: 'white'};
        data[26][39] = {color: 'white'};
        data[23][38] = {color: 'white'};
        data[27][38] = {color: 'white'};
        return {
            data
        }
    },
    mounted() {
        console.log(this.data);
    }
})
</script>

<style lang="scss" scoped>
.draw {
    // width: auto;
    // overflow: hidden;
    // margin: 0 auto;
    // position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .draw-content {
        header {
            text-align: center;
            margin: 10px 0;
        }
        .content {
            display: grid;
            grid-template-columns: repeat(50, 10px);
            grid-template-rows: repeat(50, 10px);
            div {
                width: 10px;
                height: 10px;
            }
        }
    }
}
</style>