<template>
    <div class="point-msg">
        <div v-if="hasContent">
            <div>x: {{pointMsg.x}}</div>
            <div>y: {{pointMsg.y}}</div>
            <template v-if="pointMsg.from">
                <div v-for="item in pointMsg.from" :key="item.id">
                    <span class="owner">owner: {{item.owner}}</span>
                    <span class="color">color: {{item.color}}</span>
                </div>
            </template>
        </div>
        <div v-else>
            我的肚子🈳️空空🈳️
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

        }
    }
}
</script>
<style lang="scss" scoped>
.point-msg {
    grid-area: point-msg;
    place-self: center center;
    width: 200px;
    height: 100px;
    background-color: #ccc;
    margin: 0 20px;
}
</style>