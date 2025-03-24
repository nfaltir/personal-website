document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("contributionsChart").getContext("2d");

  // Create gradient for bars
  const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, "rgba(45, 212, 191, 0.8)");
  gradient.addColorStop(1, "rgba(6, 182, 212, 0.2)");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "API Service",
        "ML Pipeline",
        "UI Components",
        "Documentation",
        "DevOps Tools",
      ],
      datasets: [
        {
          label: "Contributions",
          data: [42, 56, 23, 18, 37],
          backgroundColor: gradient,
          borderColor: "rgba(45, 212, 191, 1)",
          borderWidth: 1,
          borderRadius: 6,
          maxBarThickness: 40,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: "Open Source Contributions by Project",
          color: "rgba(200, 200, 200, 0.8)",
          font: {
            size: 16,
            family: "'Inter', sans-serif",
            weight: "500",
          },
          padding: {
            bottom: 20,
          },
        },
        tooltip: {
          backgroundColor: "rgba(20, 20, 30, 0.9)",
          titleFont: {
            size: 14,
          },
          bodyFont: {
            size: 13,
          },
          padding: 12,
          cornerRadius: 8,
          displayColors: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: "rgba(100, 100, 100, 0.2)",
            drawBorder: false,
          },
          ticks: {
            color: "rgba(200, 200, 200, 0.8)",
            padding: 10,
            font: {
              size: 12,
            },
            callback: function (value) {
              return value + " commits";
            },
          },
        },
        x: {
          grid: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            color: "rgba(200, 200, 200, 0.8)",
            padding: 8,
            font: {
              size: 12,
            },
          },
        },
      },
      animation: {
        duration: 2000,
        easing: "easeOutQuart",
      },
      layout: {
        padding: {
          left: 10,
          right: 10,
          top: 0,
          bottom: 10,
        },
      },
    },
  });
});
