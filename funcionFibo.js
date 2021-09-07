function getfibo(numeroEntrada){
    numerosFibo=[];

    if (numeroEntrada > 0)
    {
        numerosFibo.push(0);
        numerosFibo.push(1);
        numerosFibo.push(1);
    }
    else if (numeroEntrada == 0)
    {
        numerosFibo.push(0);
    }
    else
    {
        alert("Por favor ingrese numeros iguales o mayores a 0");
    }


    for (i=2; i<numeroEntrada; i++)
    {
        if ((numerosFibo[i-1] + numerosFibo[i]) <= numeroEntrada)
            numerosFibo.push(numerosFibo[i-1] + numerosFibo[i]); 
    }
    return numerosFibo;
}
