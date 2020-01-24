
const data2 = {
    labels: [
        '< 26 years',
        '26-40 years',
        '41-50 years',
        '51-69 years',
        '70+ years'
    ],
    values: [0.0656, 0.2787, 0.3115, 0.3115, 0.0328]
};


var ctx = document.getElementById('chart_2').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: data2.labels,
        datasets: [{
            lineTension: 0,
            label: 'Living in tiny house',
            backgroundColor: 'rgba(0, 200, 200)',
            borderColor: 'rgb(255, 255, 255)',
            data: data2.values
        }]
    },

    options: {
        maintainAspectRatio: false,
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
            text: 'Living in a tiny house'
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
                    stepSize: 0.2,
                    min: 0,
                    callback: function (value) {
                        return value * 100 + "%"
                    },
                },
                scaleLabel: {
                    display: true,
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false
                },
                scaleLabel: {
                    display: true,
                    labelString: "Age group"
                }
            }]
        }
    }
});
