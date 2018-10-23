$(document).ready(function () {
    //ejemplo: 1 - x * x
    $("#formCircular").submit(function (event) {
        functionPlot({
            target: '#circular',
            grid: true,
            data: [
                { fn: `sqrt(${$("#inputCircular").val()})`, color: 'green' },
                { fn: `-sqrt(${$("#inputCircular").val()})`, color: 'red' }
            ]
        })

        event.preventDefault();
    });
});

