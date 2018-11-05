<template>
  <div class="about">
    <navigation></navigation>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName">
      <input type="text" placeholder="Last Name" v-model="lastName">
      <input type="text" placeholder="Email Address" v-model="email">
      <input type="checkbox" value="water" v-model="offerings.water">
      <input type="checkbox" value="food" v-model="offerings.food">
      <input type="checkbox" value="flat-repair" v-model="offerings.flatFix">
      <button @click="submitRegistration">Submit</button>
    </div>
  </div>
</template>

<script>
    // @ is an alias to /src
    import navigation from '../components/nav'
    import app from '../firebaseConfig'
    let db = app.database();

    export default {
        name: 'register',
        data() {
            return {
                firstName: null,
                lastName: null,
                email: null,
                offerings: {
                    water: null,
                    food: null,
                    flatFix: null
                }
            }
        },
        components: {
            navigation
        },
        methods: {
            submitRegistration(){
                db.ref('providers').set({
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    offerings: {
                        water: this.offerings.water,
                        food: this.offerings.food,
                        flatFix: this.offerings.flatFix
                    }
                })
            }
        }
    }
</script>