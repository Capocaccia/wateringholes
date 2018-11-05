<template>
    <GmapMap
            v-if="coords"
            :center="{lat:coords.lat, lng:coords.long}"
            :zoom="16"
            map-type-id="terrain"
            style="width: 100%; height: 1000px"
    >
        <GmapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center=m.position"
        />
    </GmapMap>
</template>

<script>
    export default {
        name: "gmap",
        data() {
            return {
                coords: null,
                markers: [{
                    position: {
                        lat: 35.123706,
                        lng: -89.7799694
                    }
                }],
            }
        },
        components: {},
        mixins: [],
        props: [],
        methods: {
            currentLatLong() {
                navigator.geolocation.getCurrentPosition(position => {
                    let latitude = position.coords.latitude
                    let longitude = position.coords.longitude
                    this.coords = {
                        lat: latitude,
                        long: longitude
                    }
                });
            }
        },
        computed: {
        },
        mounted(){
            this.currentLatLong()
        }
    }
</script>

<style scoped>

</style>