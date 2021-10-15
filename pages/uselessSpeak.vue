<template>
    <div class="chinese_id">
        <nya-container title="全是废话">
            <ul class="nya-list">
                <br>
                {{ info }}
            </ul>
            <br>
            <div class="nya-btn" @click="getData()">
                下一个
            </div>
        </nya-container>

    </div>
</template>

<script>
const axios = require('axios');
export default {
    name: 'uselessSpeak',
    data() {
        return {
            info: null
        };
    },
    mounted() {
        axios.get('/data.json').then(response => {
            let data = response.data;
            var arrList = Object.values(data); //对象转化为数组
            let random = arrList[Math.random() * arrList.length | 0];
            this.info = random;
        });
    },
    methods: {
        getData: function getData() {
            axios.get('/data.json').then(response => {
                let data = response.data;
                var arrList = Object.values(data); //对象转化为数组
                let random = arrList[Math.random() * arrList.length | 0];
                this.info = random;
            });
        }
    }
};
</script>

<style lang="scss">
.chinese_id {
    .nya-btn {
        margin-top: 20px;
    }
}
</style>
