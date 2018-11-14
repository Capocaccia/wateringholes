<template>
    <div class="nav">
        <router-link class="link" to="/">Home</router-link>
        <router-link class="link" to="/map">Map</router-link>
        <router-link class="link" to="/register">Provide</router-link>
    </div>
</template>

<style scoped lang="scss">
    @import '../scss/components/nav';
</style>

<script>
    export default {
        name: "navigation",
        data() {
            return {}
        },
        components: {},
        mixins: [],
        props: [],
        methods: {},
        computed: {}
    }
</script>