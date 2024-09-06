let reg = document.getElementById('texto')
let peso = document.getElementById('peso')
let result = document.getElementById('resultado')

function verify(){
    switch(true){
        case reg.value.toUpperCase() == 'CENTRO' && peso.value > 5 :
            result.innerText = 'O frete do seu produto custará R$25,00'
            break;

        case reg.value.toUpperCase() == 'CENTRO' && peso.value <= 5 :
            result.innerText = 'O frete do seu produto custará R$15,00'
            break;

        case reg.value.toUpperCase() == 'NORTE' && peso.value > 5 :
                result.innerText = 'O frete do seu produto custará R$25,00'
                break;
    
        case reg.value.toUpperCase() == 'NORTE' && peso.value <= 5 :
                result.innerText = 'O frete do seu produto custará R$15,00'
                break;

        case reg.value.toUpperCase() == 'SUL' && peso.value > 5 :
                result.innerText = 'O frete do seu produto custará R$25,00'
                break;
    
        case reg.value.toUpperCase() == 'SUL' && peso.value <= 5 :
                result.innerText = 'O frete do seu produto custará R$15,00'
                break;
                
        default:
                result.innerText = 'Região inválida'
                break;
    }
}

