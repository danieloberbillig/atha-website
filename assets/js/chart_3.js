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
                backgroundColor: 'rgba(0, 150, 150, 1)',
                data: data3.values,
            }
        ]
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