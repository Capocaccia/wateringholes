<template>
  <div class="about">
    <navigation></navigation>
    <div>
      <input type="text" placeholder="First Name">
      <input type="text" placeholder="Last Name">
      <input type="text" placeholder="Email Address">
      <select name="" id="">
        <option value="water"></option>
        <option value="food"></option>
        <option value="flat-repair"></option>
      </select>
      <input type="text" placeholder="">
      <input type="text" placeholder="">
      <input type="text" placeholder="">
    </div>
  </div>
</template>

<script>
    // @ is an alias to /src
    import navigation from '../components/nav'

    export default {
        name: 'register',
        data() {
            return {

            }
        },
        components: {
            navigation
        }
    }
</script>