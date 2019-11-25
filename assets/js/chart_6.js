const data6 = {
    labels: [
        'Carpenter / DIY handyperson',
        'Registered builder',
        'Registered caravan manufacturer',
        'Other'
    ],
    values: [0.5472, 0.2453, 0.0189, 0.2453]
    // values: [ [0.5472, 29], [0.2453, 13], [0.0189, 1], [0.2453, 13] ]
    // [%-val,cnt-val]
};


var ctx = document.getElementById('chart_6').getContext('2d');
var myBarChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: data6.labels,
        datasets: [
            {
                // label: "Population (millions)",
                backgroundColor: 'rgba(0, 150, 150, 1)',
                // backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                data: data6.values,
            }
        ]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: 'Type of tiny house builder'
        },
        scales: {
            xAxes: [{
                id: 'first-y-axis',
                type: 'linear',
                ticks: {
                    stepSize: 0.20,
                    min: 0,
                    max: .6,
                    callback: function (value) {
                        return value * 100 + "%"
                    },
                },
                scaleLabel: {
                    display: true,
                    labelString: "Percentage"
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