<template>
  <div class="home">
    <medicos-list></medicos-list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MedicosList from '@/components/medicos/MedicosList.vue';

@Component({
  components: {
    MedicosList
  },
})
export default class Home extends Vue {}
</script>
