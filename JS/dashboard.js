/* globals Chart:false, feather:false */

(function () {
  ("use strict");

  feather.replace();

  // Graphs
  var ctx = document.getElementById("myChart");
  // Graphs
  var ctx2 = document.getElementById("myChart2");
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["18-22", "23-27", "28-35", "35-40", "40-50"],
      datasets: [
        {
          data: [5339, 1345, 8483, 4003, 3489, 4092, 2034],
          lineTension: 0,
          backgroundColor: "transparent",
          borderColor: "#007bff",
          borderWidth: 4,
          pointBackgroundColor: "#007bff",
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: false,
            },
          },
        ],
      },
      legend: {
        display: false,
      },
    },
  });

  // And for a doughnut chart
  var myChart2 = new Chart(ctx2, {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [50, 30, 10],
          backgroundColor: [
            'red',
            'orange',
            'yellow',
            
          ],
        },
      ],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: ["Male", "Female", "Bi"],
    },
    // options: options,
  });

  // var config = {
  //   type: "doughnut",
  //   data: {
  //     datasets: [
  //       {
  //         data: [
  //           randomScalingFactor(),
  //           randomScalingFactor(),
  //           randomScalingFactor(),
  //           randomScalingFactor(),
  //           randomScalingFactor(),
  //         ],
  //         backgroundColor: [
  //           window.chartColors.red,
  //           window.chartColors.orange,
  //           window.chartColors.yellow,
  //           window.chartColors.green,
  //           window.chartColors.blue,
  //         ],
  //         label: "Dataset 1",
  //       },
  //     ],
  //     labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
  //   },
  //   options: {
  //     responsive: true,
  //     legend: {
  //       position: "top",
  //     },
  //     title: {
  //       display: true,
  //       text: "Chart.js Doughnut Chart",
  //     },
  //     animation: {
  //       animateScale: true,
  //       animateRotate: true,
  //     },
  //   },
  // };
})();
