function factorial (){
    let c = 1;
    n = document.getElementById("n").value;
    for (let i = 1; i <= n; i++){
        c=c*i;     
    }

    console.log(c);
    resultado = document.getElementById("resultado");
    resultado.value = c;
    return c;
}