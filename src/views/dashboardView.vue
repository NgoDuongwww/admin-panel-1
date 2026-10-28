<script setup>
import dataMonthlyProgress from '../components/dataMonthlyProgress.vue'
import dataTodayReport from '../components/dataTodayReport.vue'
</script>

<template>
  <div class="dashboard">
    <div class="db db__card">
      <div class="card card--1">
        <div class="top">
          <div class="top__icon top__icon--1">
            <i class="fa-solid fa-people-group"></i>
          </div>
          <div class="top__data">
            <div class="data-name">Total Custommer</div>
            <div class="data-number">120</div>
          </div>
        </div>
        <div class="bottom">Show Details</div>
      </div>
      <div class="card card--2">
        <div class="top">
          <div class="top__icon top__icon--2">
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
          <div class="top__data">
            <div class="data-name">Total Sals</div>
            <div class="data-number">234</div>
          </div>
        </div>
        <div class="bottom">Show Details</div>
      </div>
      <div class="card card--3">
        <div class="top">
          <div class="top__icon top__icon--3">
            <i class="fa-solid fa-credit-card"></i>
          </div>
          <div class="top__data">
            <div class="data-name">Total Profit</div>
            <div class="data-number">$456</div>
          </div>
        </div>
        <div class="bottom">Show Details</div>
      </div>
      <div class="card card--4">
        <div class="top">
          <div class="top__icon top__icon--4">
            <i class="fa-solid fa-dice-d6"></i>
          </div>
          <div class="top__data">
            <div class="data-name">Out of Stock</div>
            <div class="data-number">67</div>
          </div>
        </div>
        <div class="bottom">Show Details</div>
      </div>
    </div>
    <div class="db db__table">
      <div class="table table__expiring-list">
        <div class="header expiring-list__header">
          <div class="header__title">Expiring List</div>
          <div class="header__option">
            See All <i class="fa-solid fa-chevron-right"></i>
          </div>
        </div>
        <div class="body expiring-list__body">
          <table>
            <thead>
              <tr>
                <th>Medicine name <i class="fa-solid fa-up-down"></i></th>
                <th>Expire Date <i class="fa-solid fa-up-down"></i></th>
                <th>Quantity <i class="fa-solid fa-up-down"></i></th>
                <th>Chart <i class="fa-solid fa-up-down"></i></th>
                <th>Reset <i class="fa-solid fa-up-down"></i></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Doxycycline</td>
                <td>24 Dec 2021</td>
                <td>40</td>
                <td>---</td>
                <td><i class="fa-solid fa-repeat"></i></td>
              </tr>
              <tr>
                <td>Abetis</td>
                <td>24 Dec 2021</td>
                <td>40</td>
                <td>---</td>
                <td><i class="fa-solid fa-repeat"></i></td>
              </tr>
              <tr>
                <td>Diasulin 10ml</td>
                <td>24 Dec 2021</td>
                <td>40</td>
                <td>---</td>
                <td><i class="fa-solid fa-repeat"></i></td>
              </tr>
              <tr>
                <td>Cerox CV</td>
                <td>24 Dec 2021</td>
                <td>40</td>
                <td>---</td>
                <td><i class="fa-solid fa-repeat"></i></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="table table__recent-order">
        <div class="header recent-order__header">
          <div class="header__title">Recent Order’s</div>
          <div class="header__option">
            See All <i class="fa-solid fa-chevron-right"></i>
          </div>
        </div>
        <div class="body recent-order__body">
          <table>
            <thead>
              <tr>
                <th>Medicine name <i class="fa-solid fa-up-down"></i></th>
                <th>Batch No <i class="fa-solid fa-up-down"></i></th>
                <th>Quantity <i class="fa-solid fa-up-down"></i></th>
                <th>Status <i class="fa-solid fa-up-down"></i></th>
                <th>Price <i class="fa-solid fa-up-down"></i></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Paricel 15mg</td>
                <td>783627834</td>
                <td>40</td>
                <td>Delivered</td>
                <td>$23.00</td>
              </tr>
              <tr>
                <td>Abetis 20mg</td>
                <td>783627834</td>
                <td>40</td>
                <td>Pending</td>
                <td>$23.00</td>
              </tr>
              <tr>
                <td>Cerox CV</td>
                <td>783627834</td>
                <td>40</td>
                <td>Cancelled</td>
                <td>$23.00</td>
              </tr>
              <tr>
                <td>Abetis 20mg</td>
                <td>783627834</td>
                <td>40</td>
                <td>Delivered</td>
                <td>$23.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="db db__data">
      <div class="data data__monthly-progress"><dataMonthlyProgress /></div>
      <div class="data data__today-report"><dataTodayReport /></div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import "@/styles/main"

.dashboard
  @include w-100-h-100
  padding: var(--space-6)

  .db
    @include w-100-h-auto
    @include display-flex-row-between-center
    margin: 0 0 var(--space-6) 0

    .card
      width: 23%
      height: 136px
      background: var(--color-gray-800)
      border-radius: var(--radius-md)
      @include display-flex-column-between-center
      padding: var(--space-3)

      .top
        @include display-flex-row-between
        color: var(--color-white)
        width: 100%
        height: 50%

        .top__icon
          width: 16%
          border-radius: 50%

          .fa-solid
            @include w-100-h-100
            font-size: 18px
            @include display-flex-center-center

        .top__icon--1
          background: var(--color-primary)

        .top__icon--2
          background: var(--color-green)

        .top__icon--3
          background: var(--color-yellow)

        .top__icon--4
          background: var(--color-red)

        .top__data
          width: 78%
          @include display-flex-column-flexStart

          .data-name
            font-size: var(--fs-lg)

          .data-number
            font-size: var(--fs-2xl)

      .bottom
        width: 100%
        height: 20%
        color: var(--color-green)
        font-size: var(--fs-sm)
        @include display-flex-ali-center

    .table
      width: 790px
      height: 250px
      background: var(--color-gray-800)
      border-radius: var(--radius-md)
      color: var(--color-white)
      padding: var(--space-3)
      @include display-flex-column-between

      .header
        @include display-flex-row-between
        width: 100%
        height: 5%

        .header__title
          font-size: var(--fs-lg)

        .header__option
          font-size: var(--fs-sm)
          color: var(--color-primary)

      .body
        width: 100%
        height: 90%

        table
          width: 100%
          border-collapse: separate
          border-spacing: 0 20px

          thead
            tr
              th
                color: var(--color-gray-600)
                font-weight: normal
          tbody
            tr
              td
                text-align: center

    .data
      width: 790px
      height: 350px
      padding: var(--space-3)
      background: var(--color-gray-800)
      border-radius: var(--radius-md)
</style>
