document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('docTypeChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Audits', 'Feasibility', 'LMIs', 'Manuals', 'MoMs', 'SOPs'],
            datasets: [{
                data: [5, 10, 10, 15, 25, 35],
                backgroundColor: [
                    '#f5ba7f', // Audits
                    '#a5cbdf', // Feasibility
                    '#86b5d0', // LMIs
                    '#5e9bc2', // Manuals
                    '#245884', // MoMs
                    '#ffffff'  // SOPs
                ],
                borderColor: [
                    '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#e2e8f0'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '55%',
            plugins: {
                legend: {
                    display: false // Hide default legend
                },
                tooltip: {
                    enabled: true,
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed + '%';
                        }
                    }
                }
            },
            layout: {
                padding: {
                    top: 20,
                    bottom: 20,
                    left: 40,
                    right: 40
                }
            }
        }
    });
});