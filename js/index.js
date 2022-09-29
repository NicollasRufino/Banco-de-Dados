let ctx = document.getElementById('chart').getContext('2d');
let chart = new Chart(ctx, {

    type: 'bar',

    data: {
        labels:["João", "Mafer", "Igor", "Nicollas", "Luz", "Yanko", "Gabriel"],
        datasets: [
            {
            label: "Oxigenação",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [85, 90, 95, 100, 95, 90, 90],
            },
            {
                label: "Batimentos Cardíacos",
                backgroundColor: 'rgb(0, 99, 132)',
                borderColor: 'rgb(0, 99, 132)',
                data: [60, 100, 90, 95, 125, 95, 80],
            }
        
        
        
        ]
    },
    
    options: {}
});
