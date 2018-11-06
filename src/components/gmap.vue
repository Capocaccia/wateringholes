<template>
    <GmapMap
            v-if="coords"
            :center="{lat:coords.lat, lng:coords.long}"
            :zoom="16"
            map-type-id="terrain"
            style="width: 100%; height: 1000px"
    >
        <span v-if="markers">
            <GmapMarker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m.position"
                    :clickable="true"
                    :draggable="false"
                    @click="center=m.position"
            />
        </span>

    </GmapMap>
</template>

<script>
    import app from '../firebaseConfig'
    let db = app.database();
    let providers = db.ref('providers')

    export default {
        name: "gmap",
        data() {
            return {
                coords: null
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
            markers(){
                let markers = [];
                providers.on('value', (snapshot) => {
                    snapshot.forEach((childSnap ) => {
                        let val = childSnap.val()
                        markers.push({
                            position: {
                                lat: val.coords.lat,
                                lng: val.coords.lng
                            }
                        })
                    })
                })
                return markers
            }
        },
        mounted(){
            this.currentLatLong()
        }
    }
</script>

<style scoped>

</style>