<template>
    <div class="point-content">
        <header>DRAW <i class="flower">🌸🌼🌺</i></header>
        <div class="content" @mouseleave="onMouseOut">
            <div v-for="(item, index) in data" :key="item.id">
                <div v-for="(sItem, sIndex) in data[index]" :key="sItem.id"
                    class="draw-item"
                    @mouseover="onMouseOver(index, sIndex, sItem)"
                    :style="{ background: sItem.color }">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import _ from 'underscore';

import { getDraw } from '../../api/index';

export default {
    props: {
        pointMsg: null, Object
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
        // data[10][15] = {color: 'white'};
        // data[40][15] = {color: 'white'};
        // data[25][40] = {color: 'white'};
        // data[24][39] = {color: 'white'};
        // data[26][39] = {color: 'white'};
        // data[23][38] = {color: 'white'};
        // data[27][38] = {color: 'white'};
        return {
            data
        }
    },
    mounted() {
        this.initConfig();
    },
    methods: {
        async initConfig() {
            const { data } = this;
            const res = await getDraw();
            res.forEach(ele => {
                const curItem = data[ele.x][ele.y];
                curItem.from === undefined && (curItem.from = []);
                curItem.from.push({
                    owner: `${ele.nickName}(${ele.fromEmail})`,
                    color: ele.color
                });
                curItem.color = ele.color;
            });
        },
        onMouseOver: _.throttle(function(x, y, item) {
            const obj = Object.assign({
                x, y
            }, item);
            console.log(obj)
            this.$emit('update:pointMsg', obj);
        }, 0),
        onMouseOut() {
            console.log('bye');
            this.$emit('update:pointMsg', null);
        }
    }
}
</script>
<style lang="scss" scoped>
.point-content {
    grid-area: point-content;
    header {
        text-align: center;
        margin: 10px 0;
        color: #2c3e50;
    }
    .content {
        display: grid;
        grid-template-columns: repeat(50, 10px);
        grid-template-rows: repeat(50, 10px);
        div {
            box-sizing: border-box;
            width: 10px;
            height: 10px;
        }
        .draw-item:hover{
            border: 1px solid white;
        }
    }
}
</style>