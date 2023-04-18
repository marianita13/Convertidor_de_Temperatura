const tempInicial = document.getElementById('grados');
const celsius = document.getElementsByTagName('input');
const tempFinal = document.getElementById('tempFinal')
const tempFinal2 = document.getElementById('tempFinal2')
const mercurio = document.getElementById('color')
let resultado;

if (isNaN(tempInicial.value)){
    alert('No es un número')
    resultado=''

    tempFinal.innerHTML=`${resultado}°`
    tempFinal2.innerHTML=`${resultado}°`
    tempInicial.value=''
}else{
    function convertir(){
        if (celsius[1].checked==true){
            resultado=(tempInicial.value-32)*(5/9)
        }
        else if (celsius[2].checked==true){
            resultado=(tempInicial.value*9/5)+32
        }else{
            alert('Selecciona una opción')
            resultado=''
        }
        
        if (resultado>=100){
            mercurio.style.height=`100%`
        }
        else if (resultado<=0){
            mercurio.style.height=0
        }
        else{
            mercurio.style.height=`${resultado}%`
        }
        tempFinal.innerHTML=`${resultado.toFixed(2)}°`
        tempFinal2.innerHTML=`${resultado.toFixed(2)}°`
        tempInicial.value=''
    }
}