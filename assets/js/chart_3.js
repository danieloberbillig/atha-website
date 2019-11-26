const data3 = {
    labels: [
        'Rural property',
        'Backyard of existing home',
        'Cluster living, many tiny homes',
        'Domestic, residential suburb'
    ],
    values: [0.5902, 0.2377, 0.1066, 0.0656]
};


var ctx = document.getElementById('chart_3').getContext('2d');
var myBarChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: data3.labels,
        datasets: [
            {
                // label: "Population (millions)",
                backgroundColor: 'rgba(0, 150, 150, 1)',
                // backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                data: data3.values,
            }
        ]
    },
    options: {
        tooltips: {
            callbacks: {
                label: function (tooltipItem, data) {
                    var label = data.datasets[tooltipItem.datasetIndex].label || '';

                    if (label) {
                        label += ': ';
                    }
                    label += Math.round(tooltipItem.value * 100) + '%';
                    return label;
                }
            }
        },
        legend: { display: false },
        title: {
            display: true,
            text: 'Location of tiny house'
        },
        scales: {
            xAxes: [{
                id: 'first-y-axis',
                type: 'linear',
                ticks: {
                    stepSize: 0.20,
                    min: 0,
                    max: .8,
                    callback: function (value) {
                        return value * 100 + "%"
                    },
                },
                gridLines: {
                    display: true
                },
                scaleLabel: {
                    display: true,
                    labelString: "Respondents"
                }
            }],
            yAxes: [{
                gridLines: {
                    display: false
                }
            }]
        }
    }
});

// data: {
//     datasets: [{
//         barPercentage: 0.9,
//         barThickness: 6,
//         maxBarThickness: 8,
//         minBarLength: 2,
//         // labels: data3.labels,
//         data: [100, 50, 50, 10, 10, 30, 45],
//         labels: [100, 50, 50, 10, 10, 30, 45],

//         // data: data3.values,
//     }]
// },
// options: {
//     title: {
//         display: true,
//         text: 'Location of tiny house'
//     },
//     scales: {
//         // xAxes: [{
//         //     stacked: true
//         // }],
//         // yAxes: [{
//         //     stacked: true,
//         //     ticks: {
//         //         stepSize: 0.2,
//         //         min: 0,
//         //         max: 1,
//         //         callback: function (value) {
//         //             return value * 100 + "%"
//         //         },
//         //     },
//         //     scaleLabel: {
//         //         display: true,
//         //         labelString: "Percentage"
//         //     }
//         // }]
//     }
// }

// /*
// new Chart(document.getElementById("chart3"), {
//     type: 'bar',
//     data: {
//       labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
//       datasets: [
//         {
//           label: "Population (millions)",
//           backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
//           data: [2478,5267,734,784,433]
//         }
//       ]
//     },
//     options: {
//       legend: { display: false },
//       title: {
//         display: true,
//         text: 'Predicted world population (millions) in 2050'
//       }
//     }
// });




// // {
// //     scales: {
// //         xAxes: [{
// //             gridLines: {
// //                 offsetGridLines: true
// //             }
// //         }]
// //     }
// // };
// */