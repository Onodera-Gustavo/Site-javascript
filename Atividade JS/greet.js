/*
Verifica a hora atual e exibe a saudação apropriada 
("Bom dia!", "Boa tarde!" ou "Boa noite!").
*/


const today = new Date();
let hour = today.getHours();

if(hour >= 18){
    document.getElementById('greet').innerHTML =("Boa Noite!");

}else if(hour >= 12){
    document.getElementById('greet').innerHTML =("Boa Tarde");

}else if(hour >= 4){
    document.getElementById('greet').innerHTML =("Bom Dia!");

}else{
    document.getElementById('greet').innerHTML =("Olá!");

}

