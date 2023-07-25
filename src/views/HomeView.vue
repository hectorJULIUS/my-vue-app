<template>
  <div class="home">
    <h1>Counter App</h1>
    <div class="counter">
    <button @click.prevent="increment" >Increment</button>
    <button @click.prevent="decrement">Decrement</button>
    <p>Count: {{ count }}</p>
  </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default{
  // Options API
  // data(){
  //   return {
  //     count: 0
  //   }
  // },
  // methods: {
  //    increment(){
  //     this.count++
  //   },
  //   decrement(){
  //     this.count--
  //   }
  // }

  // Composition API
   setup(){
    const count = ref (0)
    function increment(){
      count.value++
    }
    function decrement(){
      count.value--
    }
    return {count, increment,decrement}
  }
}

</script>

<style scoped>
.counter button{
  margin-right: 5px;
  padding: 1em;
  border-radius: 5px;
  background-color: black;
  color: aliceblue;
  border: none;
}
</style>