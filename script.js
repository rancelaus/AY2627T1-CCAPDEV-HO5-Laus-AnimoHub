// chart 1
const ctxEnlistment = document
  .getElementById("enlistmentChart")
  .getContext("2d");

new Chart(ctxEnlistment, {
  type: "bar",
  data: {
    labels: ["CCPROG1", "CCPROG2", "CSOPESY", "CCAPDEV", "CSARCH1"],
    datasets: [
      {
        label: "Enrolled Students",
        data: [135, 120, 140, 110, 95],
        backgroundColor: "#2563eb",
        borderRadius: 6,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 30 },
      },
    },
  },
});
