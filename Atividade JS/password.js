
    
    let btnEl = document.querySelector('.btn');
    btnEl.addEventListener('click',verify);
    
    
    function verify(){

    let numb = /\d/;
    let upper = /[A-Z]/;
    let lower = /[a-z]/;
    let spec = /[#?!@$%^&*-]/;
    const senha = document.getElementById('senha').value;
    switch(true){

        case senha.length >= 8 && numb.test(senha) && upper.test(senha) && lower.test(senha) && spec.test(senha):
            document.getElementById('length').innerHTML = 'Senha Válida';
        
        
        break;


        default:
            document.getElementById('inval').innerHTML = 'inválido';
    }

}