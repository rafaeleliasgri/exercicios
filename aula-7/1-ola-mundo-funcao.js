window.onload = function (e) {

    var btn1 = document.getElementById("btn1");
    btn1.onclick = function (e) {

        var mensagem = "Olá Mundo!";

        exbirMensagem(mensagem);

    };

    function exbirMensagem(mensagem) {

        alert(mensagem);
    }

}