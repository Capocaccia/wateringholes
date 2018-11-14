<template>
  <div class="register">
    <navigation></navigation>

    <div class="container">
      <div class="content form-container">
        <h1 class="headline">
          Submit the form below to become a provider today and receive a discount at all of our sponsors!
        </h1>
        <div class="form">
          <div class="form-group">
            <input class="form-field form-input" type="text" placeholder="First Name" v-model="firstName">
            <input class="form-field form-input" type="text" placeholder="Last Name" v-model="lastName">
            <input class="form-field form-input" type="text" placeholder="Email Address" v-model="email">
          </div>
          <div class="form-group">
            <input class="form-input" type="text" placeholder="Street" v-model="address">
            <input class="form-input" type="text" placeholder="City" v-model="city">
            <input class="form-input" type="text" placeholder="State" v-model="state">
            <input class="form-input" type="text" placeholder="Zip Code" v-model="zip">
          </div>
          <div class="form-group">
            <input class="form-input" type="text" placeholder="Notes (E.G. Hose on side of home.)" v-model="notes">
          </div>
          <div class="form-group">
            <div class="form-group-options">
              <div class="form-group-options__title">
                How can you help?
              </div>
              <div class="checkbox-wrapper">
                <input class="form-field form-checkbox" type="checkbox" value="water" v-model="water">
                <p class="form-checkbox-label">
                  Water
                </p>
              </div>
              <div class="checkbox-wrapper">
                <input class="form-field form-checkbox" type="checkbox" value="nutrition" v-model="nutrition">
                <p class="form-checkbox-label">
                  Nutrition
                </p>
              </div>
              <div class="checkbox-wrapper">
                <input class="form-field form-checkbox" type="checkbox" value="tools" v-model="tools">
                <p class="form-checkbox-label">
                  Tools
                </p>
              </div>
            </div>
          </div>

          <button class="form-button" @click="submitRegistration">Submit</button>
        </div>
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
                firstName: null,
                lastName: null,
                email: null,
                address: null,
                city: null,
                state: null,
                zip: null,
                water: false,
                nutrition: false,
                tools: false,
                notes: null
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
                            'notes': this.notes,
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