<template>
  <div class="register">
    <navigation></navigation>
    <div class="form-container">

      <div class="form">
        <input class="form-field form-input" type="text" placeholder="First Name" v-model="firstName">
        <input class="form-field form-input" type="text" placeholder="Last Name" v-model="lastName">
        <input class="form-field form-input" type="text" placeholder="Email Address" v-model="email">
        <input class="form-field form-input" type="text" placeholder="Address" v-model="address">
        <input class="form-field form-input" type="text" placeholder="City" v-model="city">
        <input class="form-field form-input" type="text" placeholder="State" v-model="state">
        <input class="form-field form-input" type="text" placeholder="Zip Code" v-model="zip">
        <div class="title">
          What can you provide?:
        </div>
        <div class="checkbox-wrapper">
          <input class="form-field form-checkbox" type="checkbox" value="water" v-model="water">
          <p class="form-checkbox-label">
            Water
          </p>
        </div>
        <div class="checkbox-wrapper">
          <input class="form-field form-checkbox" type="checkbox" value="food" v-model="food">
          <p class="form-checkbox-label">
            Food
          </p>
        </div>
        <div class="checkbox-wrapper">
          <input class="form-field form-checkbox" type="checkbox" value="flat-repair" v-model="flatFix">
          <p class="form-checkbox-label">
            Flat Repair
          </p>
        </div>
        <button class="form-button" @click="submitRegistration">Submit</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import '../scss/components/registration';
</style>

<script>
    // @ is an alias to /src
    import navigation from '../components/nav'
    import app from '../firebaseConfig'
    let db = app.database();
    import {gmapApi} from 'vue2-google-maps'

    export default {
        name: 'register',
        data() {
            return {
                firstName: 'Carter',
                lastName: 'Capocaccia',
                email: 'c@c.com',
                address: '212 Ericson Road',
                city: 'Cordova',
                state: 'TN',
                zip: '38018',
                water: true,
                food: false,
                flatFix: true
            }
        },
        components: {
            navigation
        },
        computed: {
            google: gmapApi
        },
        methods: {
            submitRegistration(){
                let geocoder = new this.google.maps.Geocoder();

                let address = `${this.address} ${this.city} ${this.state} ${this.zip}`;

                geocoder.geocode( { 'address': address}, (results, status) => {
                    if (status === this.google.maps.GeocoderStatus.OK) {

                        db.ref('providers').push({
                            'firstName': this.firstName,
                            'lastName': this.lastName,
                            'email': this.email,
                            'offers': {
                                water: this.water,
                                food: this.food,
                                flatFix: this.flatFix
                            },
                            'coords': {
                                lat: results[0].geometry.location.lat(),
                                lng: results[0].geometry.location.lng()
                            }
                        })
                    }
                })
            }
        }
    }
</script>