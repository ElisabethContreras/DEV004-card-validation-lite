const numberInput = document.getElementById('cardnumber');
numberInput.addEventListener('keypress', function (e){
  if (!acceptNumber(e)){
    e.preventDefault();
    console.log(numberInput.value)
    alert('Ingrese sólo números')
  }
})
//Solo permite introducir numeros.
function acceptNumber(e){
  const key = e.charCode;
  return key >= 48 && key <= 57;
}
//no valida si esta vacio el campo
const botton = document.getElementById('botton')
botton.addEventListener('click', saveInput)
function saveInput(){
  const inputValue = numberInput.value;
  if(inputValue.length === 0){
    alert('EL campo es obligatorio')
    console.log('esta vacio')
  }
  else{
    //isValid(inputValue)
    //console.log(isValid(inputValue))
    const spanMensaje = document.getElementById('mensaje')

    if(isValid(inputValue)) {

      spanMensaje.innerHTML = "Tarjeta validada"
      // aqui debemos poner mensaje de exito
    } else{
      // aqui debemos poner mensaje de fallo
      spanMensaje.innerHTML = "Tarjeta invalida"
    }

  }
}

function isValid(creditCardNumber){
  const arrayInvertido = creditCardNumber.trim().split("").reverse();
  const arrayPar = arrayInvertido.filter(function (a, b) {
    if (b % 2 === 1) return a;
  });  let arrayImpar = arrayInvertido.filter(function (a, b) {
    if (b % 2 === 0) return a;
  });  const arrayNuevo = arrayPar.map(function (parmulti) {
    const multipar = parmulti * 2;    if (multipar >= 10) {
      const mayor10 = multipar.toString().split("").map(Number);
      const arraysuma = mayor10.reduce(function (a, c) {
        return a + c;
      });      return arraysuma;
    }
    else { return multipar }
  });
  arrayImpar = arrayImpar.map(Number)
  const sumapar = arrayNuevo.reduce(function (a, b) {
    return a + b;
  })
  const sumaImpar = arrayImpar.reduce(function (a, c) {
    return a + c;
  })
  const resultado = sumapar + sumaImpar;
  if (resultado % 10 === 0) {
    return true;
  } else {
    return false;
  }
}
