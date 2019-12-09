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
                backgroundColor: 'rgba(0, 150, 150, 1)',
                data: data5.values,
            }
        ]
    },
    options: {
        maintainAspectRatio: false,
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