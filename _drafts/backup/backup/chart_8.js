// ADDITIONAL CHART

var ctx = document.getElementById('chart_8').getContext('2d');
var myBarChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: [
            'Passionate about small footprint',
            'Income booster or for extend family',
            'Only financial option to live on my own',
            'Temporarily / get into housing market',
        ],
        datasets: [{
            data: [.70, .20, .18,  .06, ],
            backgroundColor: 'rgba(0, 150, 150, 1)',

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
        legend: { display: false },
        title: {
            display: true,
            text: 'Main drivers to dwell'
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