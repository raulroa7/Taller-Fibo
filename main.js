document.getElementById("ejecutar").addEventListener("click", function()
{
    let numeroEntrada;
    numeroEntrada = prompt("Ingrese el numero limite para generar la serie fibonacci");
    
    let fiboResultado = getfibo(numeroEntrada);
    
    console.log("Serie Fibonacci: " + fiboResultado);
});

