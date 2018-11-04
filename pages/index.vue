<template>
  <div>
    <h1>Hello, This Is Nuxt + TypeScript</h1>
    <h2>Look on your console</h2>
    {{ count }}
    <button @click="addToCount(1)">Add</button>
    <button @click="resetCount">Reset</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class'

@Component
export default class Index extends Vue {
  count = 0
  msg = 'Hello, Prayuth'

  fetch () {
    console.log('fetch')
  }

  async asyncData () {
    console.log('asyncData called')
  }

  created() {
    console.log('created')  
  }

  mounted () {
    this.greet()
  }

  addToCount(n: number) {
    this.count += n
  }

  resetCount() {
    this.count = 0
  }

  greet () {
    console.log('greeting: ' + this.msg)
  }
}

</script>
