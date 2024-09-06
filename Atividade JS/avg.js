function average(){
    let avg = parseFloat(document.getElementById('grade').value);
    let avg2 = parseFloat(document.getElementById('grade2').value);
    let avg3 = parseFloat(document.getElementById('grade3').value);
    let avg4 = parseFloat(document.getElementById("grade4").value);
    let total = ( (avg + avg2 + avg3 + avg4)/4);
    if(total >= 6){
        document.getElementById('sla').innerHTML ='Você passou, sua média foi de ' + total;
    }else if(total <5){
        document.getElementById('sla').innerHTML ='Você está reprovado, sua média foi de ' + total;
    }else if(total > 5.0 && total < 6.0){
        document.getElementById('sla').innerHTML = 'Você está de recuperação kkkkkkkkkk, sua média foi de ' + total.toFixed(2); 
    }
}


function reload(){
    window.location.reload()
}