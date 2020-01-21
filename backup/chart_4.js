var ctx = document.getElementById('chart_4').getContext('2d');
var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["< 15K", "16-25K", "26-45K", "46-65K", "66-85K", "106-125K", "126-145K", "146-165K"],
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
                ticks: {
                    stepSize: 10
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
    }
});