let tempoPipoca = 10;
let tempoMacarrao = 8;
let tempoCarne = 15;
let tempoFeijao = 12;
let tempoBrigadeiro = 8;

let escolhaPipoca = "pipoca";
let escolhaMacarrao = "macarrao";
let escolhaCarne = "carne";
let escolhaFeijao = "feijao";
let escolhaBrigadeiro = "brigadeiro";

function microondasMenu (comida, tempo){
    if(comida === escolhaPipoca && (tempo === tempoPipoca || (tempo>tempoPipoca && tempo < tempoPipoca *2))){ //Pipoca
        return "Prato pronto, bom apetite!!!";
    } else if(comida === escolhaPipoca && (tempo<tempoPipoca)){
        return "Tempo Insuficiente";
    } else if(comida ===escolhaPipoca &&(tempo === tempoPipoca * 2 || (tempo>tempoPipoca && tempo < tempoPipoca * 3))){
        return "A comida queimou";
    } else if(comida ===escolhaPipoca &&(tempo >= tempoPipoca * 3)){
        return "KABUMM!!!";
    } else if(comida === escolhaMacarrao && (tempo === tempoMacarrao || (tempo>tempoMacarrao && tempo< tempoMacarrao *2))){ //Macarrão
        return "Prato pronto, bom apetite!!!";
    } else if(comida === escolhaMacarrao && (tempo<tempoMacarrao)){
        return "Tempo Insuficiente";
    } else if(comida ===escolhaMacarrao &&(tempo === tempoMacarrao * 2 || (tempo>tempoMacarrao && tempo < tempoMacarrao * 3))){
        return "A comida queimou";
    } else if(comida ===escolhaMacarrao &&(tempo >= tempoMacarrao * 3)){
        return "KABUMM!!!";
    } else if(comida === escolhaCarne && (tempo === tempoCarne || (tempo>tempoCarne && tempo< tempoCarne *2))){ //Carne
        return "Prato pronto, bom apetite!!!";
    } else if(comida === escolhaCarne && (tempo<tempoCarne)){
        return "Tempo Insuficiente";
    } else if(comida ===escolhaCarne &&(tempo === tempoCarne * 2 || (tempo>tempoCarne && tempo < tempoCarne * 3))){
        return "A comida queimou";
    } else if(comida ===escolhaCarne &&(tempo >= tempoCarne * 3)){
        return "KABUMM!!!";
    } else if(comida === escolhaFeijao && (tempo === tempoFeijao || (tempo>tempoFeijao && tempo< tempoFeijao *2))){  //Feijão
        return "Prato pronto, bom apetite!!!";
    } else if(comida === escolhaFeijao && (tempo<tempoFeijao)){
        return "Tempo Insuficiente";
    } else if(comida ===escolhaFeijao &&(tempo === tempoFeijao * 2 || (tempo>tempoFeijao && tempo < tempoFeijao * 3))){
        return "A comida queimou";
    } else if(comida ===escolhaFeijao &&(tempo >= tempoFeijao * 3)){
        return "KABUMM!!!";
    }else if(comida === escolhaBrigadeiro && (tempo === tempoBrigadeiro || (tempo>tempoBrigadeiro && tempo< tempoBrigadeiro *2))){  //Brigadeiro
        return "Prato pronto, bom apetite!!!";
    } else if(comida === escolhaBrigadeiro && (tempo<tempoBrigadeiro)){
        return "Tempo Insuficiente";
    } else if(comida ===escolhaBrigadeiro &&(tempo === tempoBrigadeiro * 2 || (tempo>tempoBrigadeiro && tempo < tempoBrigadeiro * 3))){
        return "A comida queimou";
    } else if(comida ===escolhaBrigadeiro &&(tempo >= tempoBrigadeiro * 3)){
        return "KABUMM!!!";
    }

}

console.log(microondasMenu("brigadeiro", 24));