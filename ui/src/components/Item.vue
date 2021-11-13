<template>

  <div id="item">
    <header>{{ name }}</header>
    <!-- <img src="https://vignette.wikia.nocookie.net/blacklight-retribution-ps4/images/1/10/Blacklight_Retribution_Assault_Rifle.jpg/revision/latest?cb=20140729071525" alt="{{ name }}" /> -->
    <span v-if="equipped">EQUIPPED</span>
    <button v-if="!equipped">EQUIP</button>
  </div>

  <svg>
    <defs>
      <clipPath id="itemClip" clipPathUnits="objectBoundingBox">
        <!-- Values are relative to an aspect ratio of 1.6 -->
        <path d="
          M0,0.08 C0,0.04 0.025,0 0.05,0
          L0.95,0 L1,0.08
          L1,0.92 L0.95,1
          L0.05,1 C0.025,1, 0,0.96 0,0.92
          Z
        " />
      </clipPath>
      <clipPath id="buttonClip" clipPathUnits="objectBoundingBox">
        <!-- Values are relative to an aspect ratio of 3 -->
        <path d="
          M0,0.5 L0.16,0
          L0.915,0 C0.9575,0 1,0.125 1,0.35 
          L1,0.5 L0.84,1
          L0.085,1 C0.0425,1 0,0.825, 0,0.75
          Z
        " />
        <!-- M0,0.5 C0,0.25 0.083,0 0.16,0  -->
      </clipPath>
    </defs>
  </svg>

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      name: 'Assault Rifle',
      equipped: false
    }
  }
})
</script>

<style lang="sass">
#item
  font-family: 'Arial'
  position: relative
  aspect-ratio: 1.6
  overflow: hidden
  width: 350px

  &::before
    content: ''
    background: #337A52
    position: absolute
    left: 0
    top: 0
    height: 100%
    width: 100%
    z-index: -1
    clip-path: url(#itemClip)

  &::after
    content: ''
    background: #030504
    position: absolute
    left: 1px
    top: 1px
    height: calc(100% - 2px)
    width: calc(100% - 2px)
    z-index: -1
    clip-path: url(#itemClip)
  
  header
    color: #2B793B
    padding: 5px 10px 0px 10px
    font-size: 20px

  button
    color: #A9BDBE
    border: none
    background: none
    position: absolute
    bottom: 0
    right: 0
    height: 35px
    aspect-ratio: 3.1
    clip-path: url(#buttonClip)
    font-size: 20px
    border-radius: 0 10px 0 10px

    &::before
      content: ''
      background: #4C5858
      position: absolute
      left: 0
      top: 0
      height: 100%
      width: 100%
      z-index: -1
      clip-path: url(#buttonClip)

    &::after
      content: ''
      background: #252E33
      position: absolute
      left: 1px
      top: 1px
      height: calc(100% - 2px)
      width: calc(100% - 2px)
      z-index: -1
      clip-path: url(#buttonClip)
</style>