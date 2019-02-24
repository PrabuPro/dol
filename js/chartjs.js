var ctx = document.getElementById('myChart').getContext('2d');
var cty = document.getElementById('myChart-2').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "Monthly Enrollement",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    },

    // Configuration options go here
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            yAxes: [{
                ticks: {
                    fontSize: 20
                }
            }],
            xAxes: [{
                ticks: {
                    fontSize: 12
                }
            }]
        }
    }
});
var chart = new Chart(cty, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["2018", "2019"],
        datasets: [{
            label: "Year Enrollement",
            backgroundColor: 'rgb(255, 99, 32)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 50],
        }]
    },

    // Configuration options go here
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            yAxes: [{
                ticks: {
                    fontSize: 20
                }
            }],
            xAxes: [{
                ticks: {
                    fontSize: 12
                }
            }]
        }
    }
});