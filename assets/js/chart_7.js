// Electrical Power
// additional chart


// const data7 = {
//     labels: [
//         'Mixed grid',
//         'Off grid (solar)',
//         'On grid',
//         'Other'
//     ],
//     datasets: [{
//         data: [0.286885246, 0.467213115, 0.213114754, 0.032786885],
//         backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9"],
//     }],
// };



var ctx = document.getElementById('chart_7').getContext('2d');
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [47, 29, 21, 3],
            // data: [0.286885246, 0.467213115, 0.213114754, 0.032786885],
            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9"],
        }],
        labels: [
            'Off grid (solar)',
            'Mixed grid',
            'On grid',
            'Other'
        ],
    },
    options: {
        maintainAspectRatio: false,
        title: {
            display: true,
            text: 'Electrical Power'
        },
        // DOES NOT WORK
        // tooltips: {
        //     callbacks: {
        //         label: function(tooltipItem, data) {
        //             var label = data.datasets[tooltipItem.datasetIndex].labels || '';

        //             if (label) {
        //                 label += ': ';
        //             }
        //             label += Math.round(tooltipItem.value * 100) / 100;
        //             return label;
        //         }
        //     }
        // }

        // tooltips: {
        //     callbacks: {
        //         label: function (tooltipItem, data) {
        //             var label = data.labels[tooltipItem.datasetIndex] || '';

        //             if (label) {
        //                 label += ': ';
        //             }
        //             label += Math.round(tooltipItem.value * 100) + '%';
        //             return label;
        //         }
        //     }
        // },

    }

});