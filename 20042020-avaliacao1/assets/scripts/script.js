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