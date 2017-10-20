<template>
  <div>
	  <GTHeader/>
    <div class="main">
      <nuxt/>
    </div>
    <GTFooter/>
  </div>
</template>

<script>
import GTHeader from '../components/Header.vue'
import GTFooter from '../components/Footer.vue'

export default {
  components: {
	  GTHeader,
    GTFooter
  }
}
</script>
