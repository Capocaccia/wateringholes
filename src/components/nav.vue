<template>
    <div class="nav">
        <div class="link">
            <router-link to="/">Home</router-link>
        </div>
        <div class="link">
            <router-link to="/register">Register</router-link>
        </div>
    </div>
</template>

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

<style scoped lang="scss">

    .nav {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 10vh;
        background-color: rgba(0,0,0,0.2);
        .link {
            height: 100%;
            a {
                display: block;
                color: white;
                text-decoration: none;
                height: 100%;
            }
        }
    }

</style>