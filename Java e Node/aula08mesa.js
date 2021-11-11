function podeSubir(altura, acompanhado){
    if(altura>1.40 && altura < 2.00){
        return console.log(true)
    } else if ((altura<1.40 && altura>1.20)&&(estaAcompanhado == true)) {
        return console.log(true)
    } else {
        return console.log(false)
    }

}

function podeSubir(altura, estaAcompanhado) {
    if(altura > 1.40 && altura < 2) {
        console.log("Acesso Autorizado")
    } else if ((altura < 1.40 && altura > 1.20) && (estaAcompanhado == true))  {
        console.log("Acesso autorizado com acompanhante")
    } else {
        console.log("Acesso negado")
    }
}

console.log(podeSubir(1.30, true))
console.log(podeSubir(2.02, true))