<template>
  <div id="app">
    <router-view />
    <medico-footer/>
  </div>
</template>

<script>
import MedicoFooter from '@/components/common/Footer'

export default {
  name: 'App',
  components: {
    MedicoFooter
  },
  data () {
    return {
      //
    }
  }
}
</script>
