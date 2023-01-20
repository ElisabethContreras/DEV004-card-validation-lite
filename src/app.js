/* eslint-disable no-mixed-spaces-and-tabs */
const miValidador = document.querySelector('#cardnumber');
miValidador.addEventListener('keypress', function (e){
  if (!soloNumeros(e)){
    e.preventDefault();
    alert('Ingrese sólo números')
  }
})
//Solo permite introducir numeros.
function soloNumeros(e){
  const key = e.charCode;
  return key >= 48 && key <= 57;
}
//no valida si esta vacio el campo
const valido = document.getElementById('cardnumber').value;
const boton = document.getElementById('boton')
boton.addEventListener('click', no_validado)
function no_validado(){
  if(valido.length === 0){
    alert('EL campo es obligatorio')
    console.log('esta vacio', valido)
  }
  else{
    return false
  }
}
const numeroDeTarjeta = document.getElementById('cardnumber');
const botonValidar = document.getElementById('boton');
botonValidar.addEventListener('click', esValida)

function esValida(){
  const digitos = String(numeroDeTarjeta.value);
  const arrayDigitos = []

  for (let i= 0; i < digitos.length; i++) {
    arrayDigitos.push(parseInt(digitos[i]));
    const digitoInvertido = arrayDigitos.reverse();
    if(i % 2 !== 0){
      digitoInvertido[i] = digitoInvertido[i] * 2;

      if (digitoInvertido[i] > 9){
        digitoInvertido[i] = parseInt(String(digitoInvertido[i].charAt(0))) + parseInt(String(digitoInvertido[i].charAt(1)))
      }
    }
  }

  let suma = 0;
  for(let i = 1; i < digitoInvertido.length; i++){
    suma += parseInt(digitoInvertido[i]);
  }
  suma = suma % 10;
  if(digitoInvertido[0] === suma){
    return true
  } else{
    return false
  }
}
function validacionDigitos(){
  let digitos = String(numeroDeTarjeta.value);

  if(digitos.length >= 16){
    digitos = digitos.slice(0, 16);
    numeroDeTarjeta.value = parseInt(digitos);
  }
}
document.write('<br>'+ validacionDigitos(numeroDeTarjeta))
console.log(validacionDigitos(numeroDeTarjeta));
