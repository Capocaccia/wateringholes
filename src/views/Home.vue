<template>
  <div class="home">
    <div class="container">
      <div class="content">
        <div class="headline">
          <h1>
            Welcome to AppName.
          </h1>
          <h1>
            The resource you need to keep your workout going.
          </h1>
        </div>
        <div class="callout">
          <div class="callout-half image-groups">
            <div class="image-group">
              <img :src="'/assets/drop.svg'" alt="drop">
              <img :src="'/assets/fork.svg'" alt="fork">
            </div>
            <div class="image-group">
              <img :src="'/assets/tools.svg'" alt="tools">
            </div>
          </div>
          <div class="callout-half callout-nav">
            <vnav></vnav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import '../scss/components/home';
</style>

<script>
// @ is an alias to /src
import vnav from '../components/verticalNav'

export default {
  name: 'home',
  components: {
      vnav
  }
}
</script>
