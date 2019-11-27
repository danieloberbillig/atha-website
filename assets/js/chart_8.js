// ADDITIONAL CHART

// Main drivers to dwell	# respondent	% respondent
// Financial Reasons. This is the only option available to me to live independently and have something of my own.  If I had a choice I would live in a conventional home.	22	0.222222222
// Passionate about a smaller footprint or living tiny. This would be my preference irrespective of any other option available to me.  This is a way of life for me.	84	0.848484848
// Temporarily to get into or back into the housing market	7	0.070707071
// Using the tiny home as an income booster or diversity in renting it out, or for extended family and friends to live in	24	0.242424242



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