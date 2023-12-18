import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  id: 'main',
  state: () => ({
    contador: 0,
  }),
  actions: {
    increment() {
      this.contador++;
    },
    decrement() {
      this.contador--;
    },
  },

  getter: {
    showCount() {
      return this.counter
  }
}
})
