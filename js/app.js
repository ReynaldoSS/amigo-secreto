let amigos = [];
function adicionar() {
  let amigo = document.getElementById("nome-amigo");
  if (amigo.value == "") {
    alert("Informe o nome do amigo");
    return;
  }

  if (amigos.includes(amigo.value)) {
    alert("Nome já incluído");
    return;
  }
  let lista = document.getElementById("lista-amigos");
  amigos.push(amigo.value);
  if (lista.textContent == "") {
    lista.textContent = amigo.value;
  } else {
    lista.textContent = lista.textContent + ", " + amigo.value;
  }
  amigo.value = "";
  amigo.focus();
}

function sortear() {
  if (amigos.length < 4) {
    alert("Adicione pelo menos 4 amigos");
    return;
  }
  embaralha(amigos);
  let sorteio = document.getElementById("lista-sorteio");
  for (let index = 0; index < amigos.length; index++) {
    if (index == amigos.length - 1) {
      sorteio.innerHTML =
        sorteio.innerHTML + amigos[index] + " --> " + amigos[0] + "<br>";
    } else {
      sorteio.innerHTML =
        sorteio.innerHTML +
        amigos[index] +
        " --> " +
        amigos[index + 1] +
        "<br>";
    }
  }
}

function embaralha(lista) {
  for (let index = lista.length; index; index--) {
    const indiceAleatorio = Math.floor(Math.random() * index);
    [lista[index - 1], lista[indiceAleatorio]] = [
      lista[indiceAleatorio],
      lista[index - 1],
    ];
  }
}
function reiniciar() {
  amigos = [];
  document.getElementById("lista-amigos").textContent = "";
  document.getElementById("lista-sorteio").textContent = "";
  amigo.focus();
}
