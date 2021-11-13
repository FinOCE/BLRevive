<template>
  <div id="item" :class="rarity">
    <header>{{ name }}</header>
    <img src="https://vignette.wikia.nocookie.net/blacklight-retribution-ps4/images/1/10/Blacklight_Retribution_Assault_Rifle.jpg/revision/latest?cb=20140729071525" alt="{{ name }}" />
    <span v-if="equipped">EQUIPPED</span>
    <button v-if="!equipped">EQUIP</button>

    <svg width="0" height="0">
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
          <!-- Values are relative to an aspect ratio of 3.1 -->
          <path d="
            M0,0.5 L0.16,0
            L0.915,0 C0.9575,0 1,0.125 1,0.35 
            L1,0.5 L0.84,1
            L0.085,1 C0.0425,1 0,0.825, 0,0.75
            Z
          " />
        </clipPath>
      </defs>
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['name', 'rarity', 'equipped']
})
</script>

<style lang="sass">
@mixin shapedBorder($background, $border, $clip, $ratio)
  background: none
  border: none
  aspect-ratio: $ratio
  z-index: 1

  &::before
    content: ''
    background: $border
    position: absolute
    left: 0
    top: 0
    height: 100%
    width: 100%
    z-index: -1
    clip-path: url($clip)

  &::after
    content: ''
    background: $background
    position: absolute
    left: 1px
    top: 1px
    height: calc(100% - 2px)
    width: calc(100% - 2px)
    z-index: -1
    clip-path: url($clip)

@mixin item($accent)
  display: inline-flex
  flex-direction: column
  align-items: center
  font-family: 'Arial'
  position: relative
  overflow: hidden
  width: 350px
  @include shapedBorder(#030504, $accent, #itemClip, 1.6)
  
  header
    color: $accent
    padding: 5px 10px 0px 10px
    font-size: 20px
    text-align: left
    width: calc(100% - 20px)

  img
    max-height: 150px

  span
    color: #B15337
    position: absolute
    bottom: 0
    right: 0
    height: 35px
    padding-right: 15px
    font-size: 20px

  button
    color: #A9BDBE
    position: absolute
    bottom: 0
    right: 0
    height: 35px
    font-size: 20px
    clip-path: url(#buttonClip)
    @include shapedBorder(#252E33, #4C5858, #buttonClip, 3.1)

    &:hover
      color: #fff
      cursor: pointer

      &::before, &::after
        background-color: #E75E13

.Common
  @include item(#788990)

.Uncommon
  @include item(#337A52)
</style>