<template>
    <div class="result">
        <header>结果</header>
        <div class="content">
            <div class="fast-prev">
                <img src="./../../assets/image/more-left.svg"></img>
            </div>
            <div class="slow-prev">
                <img src="./../../assets/image/left.svg"></img>
            </div>
            <div class="display">
                <ul class="wrapper" :style="{left: left + 'px'}">
                    <li class="item" v-for="item in content" :key="item.id">
                        <img :src="item.url" :alt="item.createTime">
                        <span>{{item.createTime}}</span>
                    </li>
                </ul>
            </div>
            <div class="slow-next">
                <img src="./../../assets/image/right.svg"></img>
            </div>
            <div class="fast-next">
                <img src="./../../assets/image/more-right.svg"></img>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { getPreview } from '../../api/index';

export default {
    data() {
        return {
            params: {
                pageSize: 9,
                pageIndex: 1
            },
            curIndex: 2,
            content: [],
            left: -110
        }
    },
    methods: {
        async queryPreview() {
            const { params } = this;
            const res = await getPreview(params);
            this.content = res;
        }
    },
    created() {
        this.queryPreview();
    }
}
</script>
<style lang="scss" scoped>
.result {
    margin-top: 30px;
    header {
        text-align: center;
        margin-bottom: 10px;
    }
    .content {
        display: flex;
        align-items: center;
        padding: 10px 0 6px;
        position: relative;
        &::before, &::after {
            content: '';
            position: absolute;
            height: 1px;
            width: 100%;
            background: linear-gradient(to right, #fff, #fff 3%, #e8b90c, #fff 97%, #fff);
        }
        &::before {
            top: 0px;
        }
        &::after {
            bottom: 0px;
        }
        > div {
            &:not(:nth-of-type(3)) {
                width: 23px;
                height: 23px;
                box-sizing: border-box;
                text-align: center;
                margin: 0 5px 22px;
                font-size: 12px;
                border: 1px solid #ccc;
                padding: 4px;
                border-radius: 50%;
                background: #f4f4f5;
                color: #ccc;
                font-weight: 800;
                &:hover {
                    color: #e8b90c;
                    border-color: #e8b90c;
                    cursor: pointer;
                }
            }
        }
        .display {
            width: 550px;
            height: 117px;
            overflow: hidden;
            margin: 0 20px;
            position: relative;
            .wrapper {
                position: absolute;
                left: 0px;
                display: flex;
                align-items: center;
                padding-left: 0px;
                > div {
                    flex: 1;
                }
                .item {
                    padding: 0 5px;
                    text-align: center;
                    img {
                        width: 100px;
                    }
                    span {
                        color: #606266;
                        font-size: 10px;
                    }
                }
            }
        }
    }
}
</style>