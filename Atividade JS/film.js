

function idade(){
    let age = parseInt(document.getElementById('age').value);
    let result = document.getElementById('sla');
    

    switch(true){
        case(age > 0 && age <13):
            result.textContent = 'Veja um filme de animação ou aventura!';
            break;
        case(age >12 && age <18):
            result.textContent = 'Veja um filme de ação ou drama!';
            break;
        case(age >17 && age <65):
            result.textContent = 'Veja um filme de comédia ou suspense!';
            break;
        case(age >65 && age <111):
            result.textContent = 'Veja um filme de romance ou um documentário!';
            break;
        default:
            result.textContent = 'Amigo você não tem essa idade a gente sabe...';
            break;
    }
}

function reload(){
    window.location.reload()
}