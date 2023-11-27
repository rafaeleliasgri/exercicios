window.onload = function (e) {

    var btn1 = document.getElementById("btn1");

    btn1.onclick = function (e) {

        var txt1 = document.getElementById("qtdProduto").value;

        var txt2 = document.getElementById("valUnit").value;

        var txt3 = document.getElementById("valCliente").value;


        // WARNING: For GET requests, body is set to null by browsers.

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var mensagem = this.responseText;

                alert(mensagem);
            }
        });

        xhr.open("GET", "https://localhost:7183/api/aula8Controller/troco?qtdProduto=" + txt1 + "&precoProduto=" + txt2 + "&valorDadoCliente=" + txt3);

        xhr.send();
    }
}
