<template>
    <div class="result">
        <header>结果</header>
        <div class="content">
            <div class="fast-prev">
                <<
            </div>
            <div class="slow-prev">
                <
            </div>
            <div class="display">
                <ul class="wrapper">
                    <li class="item" v-for="item in content" :key="item.id">
                        <img :src="item.url" :alt="item.createTime">
                        <span>{{item.createTime}}</span>
                    </li>
                </ul>
            </div>
            <div class="slow-next">
                >
            </div>
            <div class="fast-next">
                >>
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
                pageSize: 30,
                pageIndex: 0
            },
            content: []
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
            &:first-of-type, &:nth-of-type(2), &:last-of-type, &:nth-last-of-type(2) {
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
            &:nth-of-type(2), &:nth-last-of-type(2) {
                padding: 3px 7px;
            }
        }
        .display {
            width: 550px;
            overflow: hidden;
            margin: 0 20px;
            .wrapper {
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