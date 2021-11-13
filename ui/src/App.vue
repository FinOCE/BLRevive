<template>
  <Item />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Item from './components/Item.vue'

export default defineComponent({
  name: 'App',
  components: {
    Item
  }
})
</script>

<style lang="sass">
body
  background: #000
</style>
