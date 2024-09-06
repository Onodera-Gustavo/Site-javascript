/*Calculadora de Pontuação de Jogo

Desenvolva uma função que recebe a pontuação de um jogo e determina o nível do jogador:

- 0 a 199: Iniciante
- 200 a 499: Intermediário
- 500 a 999: Avançado
- 1000 ou mais: Mestre
*/

function score(){
    
    let points = parseInt(document.getElementById('score').value);
    let nivel = parseInt(document.getElementById('score').value);
    
    switch(true){
        
        case points < 200:
            //document.getElementById('nivel').innerHTML = 'Você é um iniciante!';
            alert("Iniciante");
            break;

        case points >= 200 && points < 500:
            //document.getElementById('nivel').innerHTML = 'Você é  intermediário!';
            alert("Intermediário");
            break;

        case points >= 500 && points < 1000:
                
            alert("Avançado");
            break;
        
        case points >= 1000:
            alert("Mestre");
            break;
        
        default:
            document.getElementById('nivel').innerHTML = 'Noob git gud!';
    
    }

}