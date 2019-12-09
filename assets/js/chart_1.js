

const data1 = {
    labels: [
        '< 26 years',
        '26-40 years',
        '41-50 years',
        '51-69 years',
        '70+ years'
    ],
    values: [36, 107, 107, 157, 8]
};



var ctx = document.getElementById('chart_1').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: data1.labels,
        datasets: [{
            lineTension: 0, 
            label: 'Community interest',
            backgroundColor: 'rgb(0, 150, 150)',
            borderColor: 'rgb(255, 255, 255)',
            data: data1.values
        }]
    },

    options: {
        maintainAspectRatio: false,
        responsive: true,
        elements: {
            line: {
                tension: 0
            }
        },
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Community interest'
        },

        elements: {
            point: {
                radius: 6,
                pointStyle: 'circle',
            }
        },
        scales: {
            yAxes: [{
                id: 'first-y-axis',
                type: 'linear',
                ticks: {
                    stepSize: 100
                },
                gridLines: {
                    display: true
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
                    labelString: "Age group"
                },
            }]
        }
    }
});

