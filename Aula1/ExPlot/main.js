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
    var xMin = document.querySelector("#xMin").value;
    var xMax = document.querySelector("#xMax").value;

    var yMin = document.querySelector("#yMin").value;
    var yMax = document.querySelector("#yMax").value;

    var func = document.querySelector("#function").value;

    var color = document.querySelector("#color").value;

    parameters.xAxis.domain = [xMin, xMax];
    parameters.xAxis.domain = [yMin, yMax];
   
    parameters.data[0].color=color;

    if(func == ""){
        parameters.data[0].fn = 'sin(x)';
    }else{
        parameters.data[0].fn = func;
    }


    functionPlot(parameters);
}