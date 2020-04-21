function media() {
  var n1 = +document.querySelector('.n1').value
  var n2 = +document.querySelector('.n2').value
  var n3 = +document.querySelector('.n3').value
  var resposta = (n1 + n2 + n3)/3
  document.querySelector('.resultado').innerHTML=(resposta)
}

function loteria() {
  for(var tenta = 0; tenta < 6; tenta++) {
    var teste = Math.floor(Math.random() * 60 + 1)
    var sorteio = document.querySelector('.sorteio')
    var go = document.createElement('p')
    var texto = document.createTextNode(teste)
    go.appendChild(texto)
    sorteio.appendChild(go)
  }
}

function addtext() {
  var valor = document.querySelector('.createtext').value
  var mostra = document.querySelector('.mostra')
  var createp = document.createElement('p')
  var texto = document.createTextNode(valor)
  createp.appendChild(texto)
  mostra.appendChild(createp)
}

function validacao() {
  var nome = document.querySelector('.nome').value
  var email = document.querySelector('.email').value
  var idade = document.querySelector('.idade').value
  var senha = document.querySelector('.senha').value

  if (!isNaN(nome)) {  
    var respnome = 'Erro ao cadastrar pessoa. No nome deve conter apenas letras e espaços! atualize a pagina e tente novamente'
    var mostra = document.querySelector('.text-validou')
    var createp = document.createElement('p')
    var texto = document.createTextNode(respnome)
    createp.appendChild(texto)
    mostra.appendChild(createp)
  } else if (idade.length < 1) {
    var respnome = 'Erro ao cadastrar pessoa. coloque uma idade valida! atualize a pagina e tente novamente'
    var mostra = document.querySelector('.text-validou')
    var createp = document.createElement('p')
    var texto = document.createTextNode(respnome)
    createp.appendChild(texto)
    mostra.appendChild(createp)
  }
   else if (email.search("@")==-1) {
    var respnome = 'Erro ao cadastrar pessoa. No email deve ter ao menos 1 "@"! atualize a pagina e tente novamente'
    var mostra = document.querySelector('.text-validou')
    var createp = document.createElement('p')
    var texto = document.createTextNode(respnome)
    createp.appendChild(texto)
    mostra.appendChild(createp)
  } else if (senha.length < 8){
    var respnome = 'Erro ao cadastrar pessoa. Na senha deve ter ao menos 8 caracteres! atualize a pagina e tente novamente'
    var mostra = document.querySelector('.text-validou')
    var createp = document.createElement('p')
    var texto = document.createTextNode(respnome)
    createp.appendChild(texto)
    mostra.appendChild(createp)
  } else {
    var respnome = 'Pessoa cadastrada com sucesso'
    var mostra = document.querySelector('.text-validou-correto')
    var createp = document.createElement('p')
    var texto = document.createTextNode(respnome)
    createp.appendChild(texto)
    mostra.appendChild(createp)
  }
}

// function verificar(){
//   var texto=document.getElementById("entrada").value;
//   for (letra of texto){
//       if (!isNaN(texto)){
//           alert("Não digite números");
//           document.getElementById("entrada").value="";
//           return;
//       }
//       letraspermitidas="ABCEDFGHIJKLMNOPQRSTUVXWYZ abcdefghijklmnopqrstuvxwyzáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ"
//       var ok=false;
//       for (letra2 of letraspermitidas ){
//           if (letra==letra2){
//               ok=true;
//           }
//        }
//        if (!ok){
//           alert("Não digite caracteres que não sejam letras ou espaços");
//           document.getElementById("entrada").value="";
//           return; 
//        }
//   }
// }