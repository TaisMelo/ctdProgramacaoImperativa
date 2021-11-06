let dia = "sexta";

let resultado = dia == "domingo"?"Vou a praia":"Fico em casa";

console.log(resultado);

switch(dia){
    case "segunda":
        console.log("Vou tomar café");
        break;
    case "quarta": 
        console.log("vou ao cinema");
        break;
    
    default:
        console.log("eu não vou fazer nada");

}