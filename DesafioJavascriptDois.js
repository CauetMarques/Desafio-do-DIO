let vitorias
let derrotas
function funcao(vitorias,derrotas){
let total=vitorias-derrotas
 return total
}

let total=funcao(9,0)
if(total<10){
    let rank="Ferro"
console.log("Seu Total foi: "+total+", então seu rank é: "+rank)
}
else if(total<=20){
    let rank="Bronze"
   console.log("Seu Total foi: "+total+", então seu rank é: "+rank)
}
else if(total<=50){
    let rank="Prata"
   console.log("Seu Total foi: "+total+", então seu rank é: "+rank)
}
else if(total<=80){
    let rank="Ouro"
    console.log("Seu Total foi: "+total+", então seu rank é: "+rank)
}
else if(total<=90){
    let rank="Diamante"
   console.log("Seu Total foi: "+total+", então seu rank é: "+rank)
}
else if(total<=100){
    let rank="Lendario"
    console.log("Seu Total foi: "+total+", então seu rank é: "+rank)
}
else if(total>100){
    let rank="Imortal"
    console.log("Seu Total foi: "+total+", então seu rank é: "+rank)
}
