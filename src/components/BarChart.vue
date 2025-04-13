  <template>
    <div class="h-[200px]">
      <Doughnut :data="chartData" :options="chartOptions" />
    </div>
  </template>
  
  <script setup>
  import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
  import { onMounted, ref } from "vue";
  import { Doughnut } from "vue-chartjs";

  ChartJS.register(ArcElement, Tooltip, Legend);
  
  const chartData = ref({
    labels: ["Blue", "Green", "Red", "Yellow"], // 20 blank time points
    datasets: [
      {
        label: 'Income',
        data: [32, 50, 100],
        borderColor: 'blue', // Green color for the line
        backgroundColor: 'blue',
        hoverOffset: 4
      },
      {
        label: 'Income',
        data: [3, 50, 100],
        borderColor: '#22c55e', // Green color for the line
        backgroundColor: '#22c55e',
        hoverOffset: 4
      },
      {
        label: 'Income',
        data: [30, 50, 100],
        borderColor: 'red', // Green color for the line
        backgroundColor: 'red',
        hoverOffset: 4
      },
      {
        label: 'Income',
        data: [100, 50, 100],
        borderColor: 'yellow', // Green color for the line
        backgroundColor: 'yellow',
        hoverOffset: 4
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
        display: false, // Hide x-axis (optional)
      },
      y: {
        min: 0,
        max: 100,
        display: false, // Y-axis range, you can adjust this based on your needs
      },
    },
    plugins: {
      legend: { 
        display: false, 
      },
    },
  }
  </script>
  