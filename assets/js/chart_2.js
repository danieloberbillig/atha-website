
const data2 = {
    labels: [
        '< 26 years',
        '26 - 40 years',
        '41 - 50 years',
        '51 - 69 years',
        '70+ years'
    ],
    values: [0.0656, 0.2787, 0.3115, 0.3115, 0.0328]
};


var ctx = document.getElementById('chart_2').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: data2.labels,
        // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Living in tiny house',
            backgroundColor: 'rgba(0, 150, 150, .3)',
            borderColor: 'rgb(255, 255, 255)',
            data: data2.values
            // data: [100, 50, 50, 10, 10, 30, 45]
        }]
    },
    // pointRadius: 0,

    // Configuration options go here
    options: {
        responsive: true,
        elements: {
            line: {
                tension: 0 // disables bezier curves
            }
        },
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: 'Living in tiny house'
        },

        elements: {
            point: {
                radius: 5,
                pointStyle: 'circle',
            }
        },
        scales: {
            yAxes: [{
                id: 'first-y-axis',
                type: 'linear',
                ticks: {
                    stepSize: 0.10,
                    min: 0,
                    max: .5,
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
