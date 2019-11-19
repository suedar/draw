<template>
    <div class="draw">
        <div class="content">
            <point-content
                :pointMsg.sync="pointMsg"
            ></point-content>
            <point-msg :pointMsg="pointMsg"></point-msg>
            <statistics></statistics>
        </div>
        <carousel></carousel>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

import carousel from './preview/carousel.vue';
import pointContent from './content/pointContent.vue';
import pointMsg from './content/pointMsg.vue';
import statistics from './content/statistics.vue';

export default Vue.extend({
    components: {
        'carousel': carousel,
        'point-content': pointContent,
        'point-msg': pointMsg,
        'statistics': statistics
    },
    data() {
        return {
            pointMsg: null
        }
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
    .content {
        display: grid;
        grid-template-areas:
            "point-content point-content point-msg"
            "point-content point-content statistics";
    }

}
</style>