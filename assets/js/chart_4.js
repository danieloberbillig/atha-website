// const data4 = {
//     labels: [
//         'Rural property',
//         'Backyard of existing home',
//         'Cluster living, many tiny homes',
//         'Domestic, residential suburb',
//     ],
//     values: [0.5902, 0.2377, 0.1066, 0.0656]
// };


var ctx = document.getElementById('chart_4').getContext('2d');
var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["< 15K", "16-25K", "26-45K", "46-65K", "66-85K", "106-125K", "126-145K", "146-165K"],
        // labels: ["< 15,000", "16,000 to 25,000", "26,000 to 45,000", "46,000 to 65,000", "66,000 to 85,000","106,000 to 125,000", "126,000 to 145,000", "146,000 to 165,000", "Not applicable"],
        datasets: [
            {
                label: "Converted Caravan",
                backgroundColor: "#ed7d31",
                data: [2, 1, 1, 2, 0, 0, 0, 0]
            },
            {
                label: "Tiny House on Foundation",
                backgroundColor: "#ffc000",
                data: [3, 4, 2, 5, 1, 3, 1, 0]
            },
            {
                label: "Tiny House on Wheels",
                backgroundColor: "#70ad47",
                data: [5, 10, 23, 21, 15, 9, 7, 1]
            }
        ]
    },
    options: {
        maintainAspectRatio: false,
        title: {
            display: true,
            text: 'Cost and Type of Tiny House'
        },
        legend: {
            display: true,
            position: 'top',
            labels: {
                boxWidth: 10,
                fontSize: 10,
                padding: 7
            }
        },
        scales: {
            yAxes: [{
                // id: 'first-y-axis',
                // type: 'linear',
                ticks: {
                    stepSize: 10,
                    // min: 0,
                    // max: .5,
                    // callback: function (value) {
                    //     return value * 100 + "%"
                    // },
                },
                scaleLabel: {
                    display: true,
                    labelString: "Respondents"
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false
                },
                scaleLabel: {
                    display: true,
                    labelString: "Cost $AUD"
                }
            }]
        }
        // ticks: {
        //     fontSize: 20
        // }
        // scales: {
        //     scaleLabel: false,
        //     labelString: 'hey hhey'
        // }
    }




    // type: 'bar',
    // data: {
    //     labels: data4.labels,
    //     datasets: [
    //         {
    //             // label: "Population (millions)",
    //             backgroundColor: 'rgba(0, 150, 150, 1)',
    //             // backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
    //             data: data4.values,
    //         }
    //     ]
    // },
    // options: {
    //     legend: { display: false },
    //     title: {
    //         display: true,
    //         text: 'Location of tiny house'
    //     },
    //     scales: {
    //         xAxes: [{
    //             id: 'first-y-axis',
    //             type: 'linear',
    //             ticks: {
    //                 stepSize: 0.20,
    //                 min: 0,
    //                 max: .8,
    //                 callback: function (value) {
    //                     return value * 100 + "%"
    //                 },
    //             },
    //             scaleLabel: {
    //                 display: true,
    //                 labelString: "Percentage"
    //             }
    //         }]
    //     }
    // }
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