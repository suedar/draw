<template>
    <div class="point-msg">
        <div class="container">
            <template v-if="hasContent">
                <div class="center">
                    <span class="big-label label">x : </span>{{pointMsg.x}}
                    <span class="big-label label">y : </span>{{pointMsg.y}}
                </div>
                <template v-if="pointMsg.from">
                    <div class="big-label label">owner : </div>
                    <div v-for="item in pointMsg.from" :key="item.id" class="from">
                        <div class="owner">{{item.owner}}</div>
                        <div class="color"><span class="label">color : </span><i class="cube" :style="{backgroundColor: item.color}"></i>{{item.color}}</div>
                    </div>
                </template>
            </template>
            <template v-else>
                <div class="empty">
                    我的肚子 空 空
                </div>
            </template>
        </div>
    </div>
</template>
<script lang="ts">

export default {
    props: {
        pointMsg: null, Object
    },
    computed: {
        hasContent() {
            return this.pointMsg !== null
        }
    },
    data() {
        return {
            // pointMsg: {
            //     color: "black",
            //     from: [
            //         {color: "blue",
            //         owner: "suedar(690372513@qq.com)"},
            //         {color: "black",
            //         owner: "suedar(6130372513@qq.com)"},
            //         {color: "black",
            //         owner: "suedar(6130372513@qq.com)"}
            //     ],
            //     x: 40,
            //     y: 15
            // }
        }
    }
}
</script>
<style lang="scss" scoped>
.point-msg {
    grid-area: point-msg;
    place-self: center center;
    height: 290px;
    display: flex;
    align-items: center;
    // line-height: 290px;
    .container {
        width: 180px;
        max-height: 270px;
        overflow-y: scroll;
        transition: 1s all linear;
        border-radius: 20px;
        margin: 0 80px;
        padding: 18px 30px;
        border: 1px solid #ebebeb;
        font-size: 14px;
        color: #606266;
        > div {
            + div {
                padding: 2px 0;
            }
            &:nth-of-type(2) {
                // margin: 5px 0;
            }
        }
        .center {
            text-align: center;
            .label + .label {
                margin-left: 15px;
            }
        }
        .label {
            margin-right: 5px;
            color: #909399;
        }
        .big-label {
            font-weight: 600;
            // color: #606266;
        }
        &:hover {
            border-color: #606266;
        }
        .empty {
            text-align: center;
        }
        .from {
            & + .from {
                margin-top: 5px;
                border-top: 1px solid #ebebeb;
            }
            .cube {
                display: inline-block;
                width: 8px;
                height: 8px;
                line-height: 8px;
                margin-right: 3px;
                border: 1px solid #f2f2f2;
            }
        }
    }
}
</style>