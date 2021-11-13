<template>
  <ItemContainer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ItemContainer from './components/ItemContainer.vue'

export default defineComponent({
  name: 'App',
  components: {
    ItemContainer
  }
})
</script>

<style lang="sass">
body
  background: #2B4043
</style>
