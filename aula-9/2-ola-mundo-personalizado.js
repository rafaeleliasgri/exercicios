window.onload = function (e) {

  var btn1 = document.getElementById("btn1");

  var txt1 = document.getElementById("caixaDeTextoNome");

  btn1.onclick = function (e) {

    var nome = txt1.value;

    olaMundoPersonalizado(nome);

  }

  function olaMundoPersonalizado(nome) {

    // WARNING: For GET requests, body is set to null by browsers.

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {

        var mensagem = this.responseText;

        alert(mensagem);

      }
    });

    xhr.open("GET", "https://localhost:7183/api/aula8Controller/olaMundoPersonalizado?nome=" + nome);

    xhr.send();
  }
}
