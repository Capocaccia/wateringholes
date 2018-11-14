<template>
    <div class="v-nav">
        <router-link class="v-nav__link" to="/">Home</router-link>
        <router-link class="v-nav__link" to="/map">Map</router-link>
        <router-link class="v-nav__link" to="/register">Provide</router-link>
    </div>
</template>

<style lang="scss">
    @import '../scss/components/verticalNav';
</style>

<script>
    export default {
        name: "verticalNav",
        data() {
            return {}
        },
        props: [],
        methods: {},
        computed: {},
        watch: {}

    }
</script>

<style scoped>

</style>