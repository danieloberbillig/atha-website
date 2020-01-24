// Electrical Power
// additional chart

var ctx = document.getElementById('chart_7').getContext('2d');
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [47, 29, 21, 3],
            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9"],
            label: 'Electrical Power',
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
    }
});