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

// chart 2
const ctxTraffic = document.getElementById("trafficChart").getContext("2d");

new Chart(ctxTraffic, {
  type: "line",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Active Users",
        data: [150, 220, 310, 270, 480, 420, 190],
        borderColor: "#10b981", // Emerald green
        backgroundColor: "rgba(16, 185, 129, 0.2)",
        fill: true,
        tension: 0.35, // Smooth curve
        pointBackgroundColor: "#10b981",
        pointRadius: 4,
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
        ticks: { stepSize: 100 },
      },
    },
  },
});

// chart 3
const ctxOrgShare = document.getElementById("orgShareChart").getContext("2d");

new Chart(ctxOrgShare, {
  type: "doughnut",
  data: {
    labels: ["LSCS", "Peer Tutors", "SPRINT", "GDSC", "INDIE"],
    datasets: [
      {
        label: "Members",
        data: [420, 180, 150, 210, 90],
        backgroundColor: [
          "#2563eb", // Blue
          "#10b981", // Green
          "#f59e0b", // Amber/Yellow
          "#ef4444", // Red
          "#8b5cf6", // Purple
        ],
        hoverOffset: 6,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          boxWidth: 12,
        },
      },
    },
  },
});
