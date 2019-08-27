<template>
  <div class="home">
    <Contai />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Contai from '@/components/Contai.vue'

export default {
  name: 'home',
  components: {
    Contai
  }
}
</script>
