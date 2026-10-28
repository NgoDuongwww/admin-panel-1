<script setup>
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  DoughnutController,
  ArcElement,
  Title,
  Tooltip,
} from 'chart.js'

ChartJS.register(DoughnutController, ArcElement, Title, Tooltip)

const chartData = {
  labels: ['Total Purchuse', 'Cash Received', 'Bank Receive', 'Total Service'],
  datasets: [
    {
      label: 'Todays Repost',
      data: [300, 50, 100, 250],
      backgroundColor: ['red', 'blue', 'green', 'orange'],
      hoverOffset: 4,
    },
  ],
}

const chartOption = {
  responsive: true,
  maintainAspectRatio: false,
  plusins: {
    title: {
      display: true,
      text: 'Todays Repost',
    },
    legend: {
      display: true,
    },
  },
}
</script>

<template>
  <div style="width: 100%; height: 100%">
    <Doughnut :data="chartData" :options="chartOption" />
  </div>
</template>

<style lang="sass" scoped></style>
