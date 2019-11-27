// ADDITIONAL CHART

// Main drivers to dwell	# respondent	% respondent
// Financial Reasons. This is the only option available to me to live independently and have something of my own.  If I had a choice I would live in a conventional home.	22	0.222222222
// Passionate about a smaller footprint or living tiny. This would be my preference irrespective of any other option available to me.  This is a way of life for me.	84	0.848484848
// Temporarily to get into or back into the housing market	7	0.070707071
// Using the tiny home as an income booster or diversity in renting it out, or for extended family and friends to live in	24	0.242424242


// RADAR AREA


var ctx = document.getElementById('chart_8').getContext('2d');
var myDoughnutChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: [
            'Only financial option to live independently on my own',
            'Passionate about small footprint',
            'Temporarily / get into housing market',
            'Income booster or for extend family'
        ],
        datasets: [{
            label: 'hey',
            data: [22, 84, 7, 24],
            backgroundColor: ["rgb(0, 150, 150)"],
        }],
    },
    options: {
        
        title: {
            display: true,
            text: 'Main drivers to dwell'
        },
    }
});