<template>
      <Line :data="chartData" :options="chartOptions" />
  </template>
  
  <script setup>
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
  } from 'chart.js'
  import { Line } from 'vue-chartjs'
  import { ref, onMounted } from 'vue'
  
  // Register Chart.js components
  ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, LinearScale, CategoryScale)
  
  const chartData = ref({
    labels: ["January", "February", "March", "April", "May", "June", "July"], // 20 blank time points
    datasets: [
      {
        label: 'Orders',
        data: [40, 39, 10, 40, 39, 80, 40],
        borderColor: '#22c55e', // Green color for the line
        backgroundColor: 'rgba(34, 197, 94, 0.2)', // Light green fill
        fill: true, // Fill under the line
        tension: 0.4, // Smooth curve for the line
      },
      {
        label: 'Refunds',
        data: [65, 59, 80, 81, 56, 55, 40], // Start with 0 for all data points
        borderColor: 'blue', // Green color for the line
        backgroundColor: 'blue', // Light green fill
        fill: true, // Fill under the line
        tension: 0.4, // Smooth curve for the line
      },
    ],
  })
  
  const chartOptions = {
    responsive: true,
    animation: {
      duration: 0, // Instant transition for the data update
    },
    scales: {
      x: {
        display: true, // Hide x-axis (optional)
      },
      y: {
        min: 0,
        max: 100, // Y-axis range, you can adjust this based on your needs
      },
    },
    plugins: {
      legend: { 
        display: true, 
        labels: {
          usePointStyle: true,
          pointStyle: 'round', 
        },
      },
    },
  }
  </script>
  