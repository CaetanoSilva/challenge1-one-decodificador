function oculta() {
  document.getElementById("oculta").style.display = "none"
  document.getElementById("msg1").style.display = "none"
  document.getElementById("msg2").style.display = "none"
}

function exibir() {
    document.getElementById("exibir").style.display = "block"
    document.getElementById("copia").style.display = "block"
  }
  
  var textoInformado = document.querySelector(".input-criptografar");
  var btCrip = document.getElementById("#btn_criptografar");
  var btDesc =  document.getElementById("#btn_descriptografar");
  var telaExibir = document.querySelector(".input-criptografado");

  function criptografa(){ 
    var texto = textoInformado.value;
    var resultado = texto
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
    telaExibir.innerHTML = "";
    telaExibir.innerHTML += ` ${resultado} `;
  }
  function descriptografa() {
    var textoDescriptografado = textoInformado.value;
    var descript = textoDescriptografado
      .replaceAll("enter", "e")
      .replaceAll("imes", "i")
      .replaceAll("ai", "a")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u");
  
    telaExibir.innerHTML = "";
    telaExibir.innerHTML += ` ${descript} `;
  }
  function copy(){
    var textoCopiado = document.getElementById('exibir').innerHTML;
    navigator.clipboard.writeText(textoCopiado)
    alert("Copiado!")
    
  }