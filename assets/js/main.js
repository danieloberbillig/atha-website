// ===============================================================
// SCROLLSPY

let mainNavLinks = document.querySelectorAll(".scrollspyContainer ul li a");
let mainSections = document.querySelectorAll("section.scrollspy");

let lastId;
let cur = [];


window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;

    mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);

        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add("current");
        } else {
            link.classList.remove("current");
        }
    });
});





// ===============================================================
// CHART 1


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



var ctx1 = document.getElementById('chart_1').getContext('2d');
var chart1 = new Chart(ctx1, {
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







// ===============================================================
// CHART 2


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


var ctx2 = document.getElementById('chart_2').getContext('2d');
var chart2 = new Chart(ctx2, {
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





// ===============================================================
// CHART 3

const data3 = {
    labels: [
        'Rural property',
        'Backyard of existing home',
        'Cluster living, many tiny homes',
        'Domestic, residential suburb'
    ],
    values: [0.5902, 0.2377, 0.1066, 0.0656]
};


var ctx3 = document.getElementById('chart_3').getContext('2d');
var myBarChart3 = new Chart(ctx3, {
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




// ===============================================================
// CHART 4

var ctx4 = document.getElementById('chart_4').getContext('2d');
var myBarChart4 = new Chart(ctx4, {
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





// ===============================================================
// CHART 5


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


var ctx5 = document.getElementById('chart_5').getContext('2d');
var myBarChart5 = new Chart(ctx5, {
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



// ===============================================================
// CHART 6


const data6 = {
    labels: [
        'Carpenter / DIY handyperson',
        'Registered builder',
        'Registered caravan manufacturer',
        'Other'
    ],
    values: [0.5472, 0.2453, 0.0189, 0.2453]
};


var ctx6 = document.getElementById('chart_6').getContext('2d');
var myBarChart6 = new Chart(ctx6, {
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




// ===============================================================
// CHART 7

// Electrical Power
// additional chart

var ctx7 = document.getElementById('chart_7').getContext('2d');
var myDoughnutChart7 = new Chart(ctx7, {
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




// ===============================================================
// CHART 8

// ADDITIONAL CHART

var ctx8 = document.getElementById('chart_8').getContext('2d');
var myBarChart8 = new Chart(ctx8, {
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




// ===============================================================
// CHART DEFAULT


// global default settings for all ChartJS charts 

// Standard chart layout
Chart.defaults.global.defaultFontColor = '#5c5c5c';
Chart.defaults.global.defaultFontSize = 11;
Chart.defaults.global.defaultFontFamily = "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
Chart.defaults.global.defaultFontStyle = 'normal';

// Tooltip
Chart.defaults.global.tooltips.xPadding = 20; 
Chart.defaults.global.tooltips.yPadding = 10; 