function verify(){
    const year = parseInt(document.getElementById('year').value)
    if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
        document.getElementById('sla').innerHTML = 'Esse ano é bissexto!'
    }else{
        document.getElementById("sla").innerHTML = 'vou me matar'
    }
}

function reload(){
    window.location.reload()
}