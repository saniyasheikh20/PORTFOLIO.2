document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('skillsChart').getContext('2d');
    const skillsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['HTML, CSS', 'Python', 'Java', 'C, C++', 'AI/ML', 'SQL'],
            datasets: [{
                label: 'Proficiency Level',
                data: [70, 50, 50, 80, 56, 55],
                backgroundColor: 'rgb(90, 90, 90)',
                borderColor: 'rgb(90, 90, 90)',
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y', // Horizontal bars
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: {
                        color: '#333'
                    }
                },
                y: {
                    ticks: {
                        color: '#333'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            },
            barThickness: 10 // Smaller bar size
        }
    });
});



