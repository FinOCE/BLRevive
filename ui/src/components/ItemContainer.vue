<template>
  <div id="itemContainer">
    <Item name="AK470 Rifle" rarity="Uncommon" />
    <Item name="Anti-Materiel Rifle" rarity="Uncommon" />
    <Item name="Assault Rifle" rarity="Common" equipped="true" />
    <Item name="Bolt-Action Rifle" rarity="Common" />
    <Item name="Bullpup Full Auto" rarity="Uncommon" />
    <Item name="Burstfire Rifle" rarity="Uncommon" />
    <Item name="Burstfire SMG" rarity="Uncommon" />
    <Item name="Combat Rifle" rarity="Uncommon" />
    <Item name="Compound Bow" rarity="Uncommon" />
    <Item name="Heavy Assault Rifle" rarity="Uncommon" />
    <Item name="Light Machine Gun" rarity="Uncommon" />
    <Item name="Light Recon Rifle" rarity="Uncommon" />
    <Item name="LMG Recon" rarity="Uncommon" />
    <Item name="M4X Rifle" rarity="Uncommon" />
    <Item name="Submachine Gun" rarity="Common" />
    <Item name="Tactical Assault Rifle" rarity="Uncommon" />
    <Item name="Tactical SMG" rarity="Uncommon" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Item from './Item.vue'

export default defineComponent({
  components: {
    Item
  }
})
</script>

<style lang="sass">
#itemContainer
  display: grid
  grid-template-columns: repeat(auto-fill, 350px)
  gap: 20px
  padding: 20px
  max-width: 720px
  background: #030504
  border-radius: 10px
</style>