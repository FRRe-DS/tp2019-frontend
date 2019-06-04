<template>
  <v-data-table
    :headers="headers"
    :items="medicos"
    class="elevation-1"
  >
    <template v-slot:items="props">
      <td>{{ props.item.id }}</td>
      <td class="text-xs-right">{{ props.item.nombre }}</td>
      <td class="text-xs-right">{{ props.item.apellido }}</td>
      <td class="text-xs-right">{{ props.item.fechaNacimiento }}</td>
      <td class="text-xs-right">{{ props.item.numeroMatricula }}</td>
    </template>
  </v-data-table>
</template>

<script>
import Medicos from "@/rest/medicos";

export default {
  data () {
    return {
      headers: [
        {
          text: 'Id',
          align: 'left',
          sortable: true,
          value: 'id'
        },
        { 
          text: 'Nombre', 
          align: 'right',
          sortable: true,
          value: 'nombre' },
        { 
          text: 'Apellido', 
          align: 'right',
          sortable: true,
          value: 'apellido' },
        { 
          text: 'Fecha Nacimiento', 
          align: 'center',
          sortable: true,
          value: 'fechaNacimiento' 
        },
        { 
          text: 'Nro Matricula', 
          align: 'right',
          sortable: true,
          value: 'numeroMatricula' 
        }
      ],
      medicos: [],
    }
  },

  created: function() {
    this.getMedicos();
  },

  methods: {
    getMedicos: async function() {
      try {
        const response = await Medicos.getRestApi().getAllMedicos();
        console.log("Response: ", response);
        this.$data.medicos = response.data.content;
        console.log("Medicos: ", this.$data.medicos);
      } catch (error) {
        this.emitError(error);
      }
    },
    clearSelectedMedico: function() {
      this.$data.selected = null;
    },
    emitError: function(error) {
      this.$emit("showError", error);
    }
  }
}
</script>
