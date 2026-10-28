<script setup>
import sidebar from '@/layouts/admin/sidebar.vue'
import topbar from '@/layouts/admin/topbar.vue'
</script>

<template>
  <div class="wrapper">
    <div class="Admin">
      <div class="AD admin__sidebar">
        <sidebar />
      </div>

      <div class="AD admin__main">
        <div class="ad admin__topbar">
          <topbar />
        </div>
        <div class="ad admin__content">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import "@/styles/main"

.wrapper
  max-width: 1920px
  height: 100vh
  margin: 0 auto
  background: var(--color-gray-900)
  position: relative
  overflow-y: hidden
  overscroll-behavior-x: none // Ngăn kéo lệch ngang trên touchpad
  overscroll-behavior-y: contain // Giữ cuộn dọc mượt

  .Admin
    @include w-100-h-100
    @include display-flex-row
    

    .AD
      height: 100%

    .admin__sidebar
      width: 12%

    .admin__main
      flex: 1 // Nó sẽ tự lấy chiếm phần còn lại
      height: 100%

      .ad
        width: 100%
        @include display-flex-column

      .admin__topbar
        height: 7%
        @include display-flex-row-flexEnd-center

      .admin__content
        flex: 1 // Nó sẽ tự chiếm phần còn lại 
        overflow-y: auto
</style>
