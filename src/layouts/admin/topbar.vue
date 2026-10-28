<script setup></script>

<template>
  <div class="topbar">
    <div class="top topbar__notification">
      <i class="fa-solid fa-bell"></i>
      <div class="count-notification"></div>
    </div>
    <div class="top topbar__profile">
      <img src="@/assets/imgs/avt-1.jpg" alt="" />
      <i class="fa-solid fa-chevron-down"></i>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import "@/styles/main"

.topbar
  width: 99.98%
  height: 100%
  @include display-flex-row-flexEnd-center
  background: var(--color-gray-800)

  .top
    margin: 0 var(--space-3)

  .topbar__notification
    position: relative

    .fa-bell
      font-size: var(--fs-lg)
      color: var(--color-white)

    .count-notification
      width: 7px
      height: 7px
      position: absolute
      top: 0
      right: 0
      background: red
      border-radius: 50%

  .topbar__profile
    @include display-flex-row-between-center

    img
      width: 36px
      height: auto
      margin: 0 var(--space-1) 0 0
      border-radius: 50%
</style>
