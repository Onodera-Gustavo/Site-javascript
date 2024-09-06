let bom = document.getElementById('bom').value;
let otimo = document.getElementById('otimo').value;
let excel = document.getElementById('excel').value;
let valor = document.getElementById('valor').value;
let check;
let gorj;

function tip1(){
    gorj = parseFloat(valor) * 0.1;
    check = gorj + parseFloat(valor);
    document.getElementById('gorjeta').innerHTML = 'O valor da gorjeta é: ' + gorj;
    document.getElementById('conta').innerHTML = 'O valor total da conta é: ' + check;
}

function tip2(){
    gorj = parseFloat(valor) * 0.15;
    check = gorj + parseFloat(valor);
    document.getElementById('gorjeta').innerHTML = 'O valor da gorjeta é: ' + gorj;
    document.getElementById('conta').innerHTML = 'O valor total da conta é: ' + check;
}

function tip3(){
    gorj = parseFloat(valor) * 0.2;
    check = gorj + parseFloat(valor);
    document.getElementById('gorjeta').innerHTML = 'O valor da gorjeta é: ' + gorj;
    document.getElementById('conta').innerHTML = 'O valor total da conta é: ' + check;
}
