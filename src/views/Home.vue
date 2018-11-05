<template>
  <div class="home">
    <navigation></navigation>
    <gmap></gmap>
  </div>
</template>

<script>
// @ is an alias to /src
import navigation from '../components/nav'
import gmap from '../components/gmap'

export default {
  name: 'home',
  components: {
      navigation,
      gmap
  }
}
</script>
