$(document).ready(function () {
    lista = [];

    graficar = () => {
        functionPlot({
            target: '#multiple',
            data: lista.slice()
        })
    }


    $("#formLimites").submit(function (event) {
        
        let fn = $("#inputLimites").val();
        let color = $("#inputColorLimite").val();
        let rango = [$("#inputLimite1").val(), $("#inputLimite2").val()];

        lista.push({
            fn: fn, color: color, range: rango
        });

        $("#tableLimites").append(
            `<tr>
                <td>${fn}</td>
                <td>[${rango}]</td>
                <td>${color}</td>
            </tr>`
        );
        graficar();

        event.preventDefault();
    });
})