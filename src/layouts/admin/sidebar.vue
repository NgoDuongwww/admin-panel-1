<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="sidebar">
    <div class="sidebar__top">
      <div class="top__avt">
        <img src="@/assets/imgs/avt-1.jpg" alt="" />
      </div>
      <div class="top__name">
        Chào
        <span>Duongw</span>
        !
      </div>
    </div>
    <div class="sidebar__bottom">
      <ul>
        <li>
          <router-link
            class="tab"
            :class="{ activeTab: $route.path === '/dashboard' }"
            to="/dashboard"
          >
            <i class="fa-solid fa-gauge"></i> Dashboard
          </router-link>
        </li>
        <li>
          <router-link
            class="tab"
            :class="{ activeTab: $route.path === '/purchase' }"
            to="/purchase"
          >
            <i class="fa-solid fa-cart-shopping"></i> Purchase
          </router-link>
        </li>
        <!-- <li><i class="fa-solid fa-paper-plane"></i> Dispenser</li>
        <li><i class="fa-sharp fa-solid fa-box-open"></i> Product</li>
        <li><i class="fa-regular fa-clipboard"></i> Reports</li>
        <li><i class="fa-brands fa-stack-overflow"></i> Stock</li>
        <li><i class="fa-solid fa-people-group"></i> Coustomer</li>
        <li><i class="fa-solid fa-user"></i> Menufacturer</li>
        <li><i class="fa-solid fa-address-card"></i> Employee</li>
        <li><i class="fa-solid fa-gear"></i> Settings</li> -->
      </ul>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import "@/styles/main"

.sidebar
  @include w-100-h-100
  background: var(--color-gray-800)
  padding: 0 var(--space-1)

  .sidebar__top
    width: 100%
    height: 7%
    @include display-flex-row-aliCenter

    .top__avt
      width: 30%
      padding: var(--space-3)

      img
        @include w-100-h-100
        border-radius: var(--radius-md)

    .top__name
      color: var(--color-gray-600)

  .sidebar__bottom
    @include w-100-h-100

    ul
      @include w-100-h-100

      li
        width: 100%
        height: 5%
        list-style: none
        margin: 0 0 var(--space-2) 0
        @include display-flex-row-aliCenter

        .tab
          @include w-100-h-100
          @include display-flex-row-aliCenter
          border-radius: var(--radius-md)
          transition: var(--transition-fast)
          text-decoration: none
          color: var(--color-gray-600)

          &:hover
            color: var(--color-white)
            background: var(--color-primary)

          i
            margin: 0 var(--space-3)
</style>
