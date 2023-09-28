
let texto_original = null;
let resultado_porcion_texto = null;
let resultado_reemplaza_palabra = null;
let resultado_verifica_palabra = null;


function iniciar(){

    texto_original = document.getElementById("texto-original").value;
    resultado_porcion_texto = document.getElementById("resultado-metodo x");
    resultado_reemplaza_palabra = document.getElementById("resultado x");
    resultado_verifica_palabra = document.getElementById("resultadoX");
    document.getElementById("boton-texto").disabled = true;
    document.getElementById("texto-original").disabled = true;
}   


function porcion_texto(){
    let longitud_texto_original = texto_original.length;
    let inicio1 = parseInt(document.getElementById("inicio").value);
    let fin1 = parseInt(document.getElementById("fin").value);
    if (inicio1 >= 1 && inicio1 <= longitud_texto_original){
        if (fin1 >= inicio1 && fin1 <= longitud_texto_original){
            resultado_porcion_texto.innerHTML = texto_original.substring(inicio1 - 1,fin1);
        }else{
            resultado_porcion_texto.innerHTML = "El intervalo ingresado es Invalido";
        }
    }else{
        resultado_porcion_texto.innerHTML = "El intervalo ingresado es Invalido";
    }
    document.getElementById("inicio").value = "";
    document.getElementById("fin").value = "";
}
    

function reemplazar_palabra(){
    let palabra_a_reemplazar = document.getElementById("palabra-del-texto").value;
    let palabra_nueva = document.getElementById("palabra-nueva").value;
    resultado_reemplaza_palabra.innerHTML = texto_original.replace(palabra_a_reemplazar, palabra_nueva);
    document.getElementById("palabra-del-texto").value = "";
    document.getElementById("palabra-nueva").value = "";
}
    
    
function verificar_palabra(){
    let palabra_ingresada = document.getElementById("palabra-a-verificar").value;
    if (texto_original.includes(palabra_ingresada)){
        resultado_verifica_palabra.innerHTML = `El texto original contiene la palabra ${'"'+palabra_ingresada+'"'}`;
    }else{
        resultado_verifica_palabra.innerHTML = `El texto original NO contiene la palabra ${'"'+palabra_ingresada+'"'}`;
    }
    document.getElementById("palabra-a-verificar").value = "";    
}         
