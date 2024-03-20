const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");
const imgResult = document.querySelector(".imgResult");
const titleResult = document.querySelector(".titleResult");
const textResult = document.querySelector(".textResult");
const btnCopiar = document.querySelector(".btn-copiar");

function btnEncriptar(){
  const textoEncriptado = encriptar(textArea.value);
  mensagem.value = textoEncriptado;
  textArea.value = "";
  imgResult.remove();
  titleResult.remove();
  textResult.remove();
  btnCopiar.style.visibility = "visible"; 
}

function btnDesencriptar(){
  const textoDesencriptado = desencriptar(mensagem.value);
  mensagem.value = textoDesencriptado;
  textArea.value = "";
}

function encriptar(stringEncriptada){
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptada = stringEncriptada.toLowerCase();

  for(let i=0; i < matrizCodigo.length; i++){
    if(stringEncriptada.includes(matrizCodigo[i][0])){
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }

  return stringEncriptada
}

function desencriptar(stringDesencriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }

  return stringDesencriptada;
}