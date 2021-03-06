const data6 = {
    labels: [
        'Carpenter / DIY handyperson',
        'Registered builder',
        'Registered caravan manufacturer',
        'Other'
    ],
    values: [0.5472, 0.2453, 0.0189, 0.2453]
};


var ctx = document.getElementById('chart_6').getContext('2d');
var myBarChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: data6.labels,
        datasets: [
            {
                backgroundColor: 'rgba(0, 150, 150, 1)',
                data: data6.values,
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
