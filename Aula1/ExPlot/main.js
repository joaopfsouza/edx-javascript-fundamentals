var parameters = {
    target: '#myFunction',
    data: [{
        fn: 'sin(x)',
        color: 'red'
    }],
    grid: true,
    yAxis: {
        domain: [-1, 1]
    },
    xAxis: {
        domain: [0, 2 * Math.PI]
    }
};

function plot() {
    var color = document.querySelector("#color").value;
    parameters.data[0].color=color;
    functionPlot(parameters);
}