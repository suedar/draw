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
                        <!-- <img src="" alt=""> -->
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
            }
        }
    },
    methods: {
        async queryPreview() {
            const { params } = this;
            const res = await getPreview(params);
        }
    },
    created() {

    }
}
</script>
<style lang="scss" scoped>
.result {
    margin-top: 15px;
}
</style>