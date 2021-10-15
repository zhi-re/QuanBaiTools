<template>
    <nya-container v-if="$store.state.welcome" class="welcome">
        <h2>Welcome</h2>
        <p>
            hello, :)
        </p>
        <div class="close" title="关闭" @click="close">
            <i class="eva eva-close-outline"></i>
        </div>
    </nya-container>
</template>

<script>
export default {
    name: 'Welcome',
    methods: {
        close() {
            this.$store.commit('SET_STORE', {
                key: 'welcome',
                value: false
            });
        }
    }
};
</script>

<style lang="scss">
.nya-container.welcome {
    margin-bottom: 32px;
    margin-top: 18px;
    .close {
        cursor: pointer;
        $width: 30px;
        position: absolute;
        right: -12px;
        top: -12px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        width: $width;
        height: $width;
        border-radius: 50%;
        color: #fff;
        background-color: var(--theme);
        box-shadow: 0 8px 10px rgba(36, 159, 253, 0.30196);
    }
}
</style>
