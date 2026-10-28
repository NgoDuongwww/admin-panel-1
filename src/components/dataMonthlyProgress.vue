<script setup>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJs,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js'

ChartJs.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip
)
const chartData = {
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  datasets: [
    {
      // label: ,
      data: [8, 5, 3, 7, 12, 11, 10, 11.5, 12, 10, 4, 4],
      borderWidth: 1,
      backgroundColor: ['#93DCAF'], // Màu nền cột
      hoverBackgroundColor: ['#F3F3F7'], // Màu nền cột khi di chuyển chuột vào
      barPercentage: 0.5, // Độ rộng của từng cột
      // duration: 3000, // Thời gian xuất hiện của cột
      borderRadius: 5,
    },
  ],
}
const chartOption = {
  responsive: true, // Cho phép tự động co giãn theo div cha
  maintainAspectRatio: false, // Không duy trì tỷ lệ khung hình mặc định
  scales: {
    beginAtZero: true, // Ép trục Y phải bắt đầu từ 0
    x: {
      display: false,
    },
    y: {
      grid: {
        color: `#343434`, // Màu vạch kẻ ngang
      },
    },
  },
  plugins: {
    title: {
      // Tiêu đề bảng
      display: true,
      text: 'Monthly Progress',
      font: { size: 16, family: "'Inter', 'sans-serif'" },
    },
    legend: {
      display: false, // Ẩn chú thích màu
    },
  },
}
</script>

<template>
  <div style="width: 100%; height: 100%">
    <Bar :data="chartData" :options="chartOption" />
  </div>
</template>

<style lang="sass" scoped></style>
