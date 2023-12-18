<template>
    <div class="contador">
      <p>Contador: {{ counter.contador }}</p>
      <button @click="counter.increment">Incrementar</button>
      <button @click="counter.decrement">Decrementar</button>
    </div>
  </template>
  
  <script setup>
    import { useCounterStore } from '@/stores/CounterStore';
    const counter = useCounterStore()

  </script>

<style >
  @media (min-width: 1024px) {
  .contador {
    background-color: red;
    min-width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
  @/stores/CounterStore