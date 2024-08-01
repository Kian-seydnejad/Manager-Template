const ctx = document.getElementById('FirstChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar', // Specify the type of chart
    data: {
        labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
        datasets: [{
            label: 'USA',
            data: [15,30,55,65,60,80,95],
            backgroundColor: [
                '#dc3545',
                '#dc3545',
                '#dc3545',
                '#dc3545',
                '#dc3545',
                '#dc3545'
            ],
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});






///////////////////////////second chart


document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('SecondChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Sales',
                    data: [99,135,170,130,190,180,270],
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    borderColor: 'black',
                    borderWidth: 2,
                    fill: true
                },
                {
                    label: 'Revenue',
                    data: [15,30,55,45,70,65,85],
                    backgroundColor: '#dc3545',
                    borderColor: 'black',
                    borderWidth: 2,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += context.parsed.y;
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });
});
