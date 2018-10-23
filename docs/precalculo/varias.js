$(document).ready(function () {
    //ejemplo: -3x + 2
    $("#formLineal").submit(function (event) {
        functionPlot({
            target: '#lineal',
            data: [
                { fn: $("#inputLineal").val(), color: 'green'}
            ]
        })
        event.preventDefault();
    });
});


