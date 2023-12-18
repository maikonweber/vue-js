<script setup>
import ContadorVue from './Contador.vue';


</script>

<template>
  <div class="todo"> <h1> TODO ITENS </h1></div>
  <ContadorVue></ContadorVue>
</template>


<style scoped>
  @media (min-width: 1024px) {
  .todo {
    min-height: 50vh;
    display: flex;
    align-items: center;
  }
}

</style>
