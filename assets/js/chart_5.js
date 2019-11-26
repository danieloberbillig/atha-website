const data5 = {
    labels: [
        'Loft bed',
        'Downstairs bedroom',
        'Day bed',
        'Lift bed',
        'Manual Murphy bed'
    ],
    values: [0.63, 0.31, 0.14, 0.14, 0.05]
};


var ctx = document.getElementById('chart_5').getContext('2d');
var myBarChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: data5.labels,
        datasets: [
            {
                // label: "Population (millions)",
                backgroundColor: 'rgba(0, 150, 150, 1)',
                // backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                data: data5.values,
            }
        ]
    },
    options: {
        data: data5,
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    var label = data.datasets[tooltipItem.datasetIndex].label || '';

                    if (label) {
                        label += ': ';
                    }
                    label += Math.round(tooltipItem.value * 100) +'%';
                    return label;
                }
            }
        },

        legend: { display: false },
        title: {
            display: true,
            text: 'Type of bed in tiny house'
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