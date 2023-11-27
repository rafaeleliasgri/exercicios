window.onload = function (e) {

    var btn1 = document.getElementById("btn1");

    btn1.onclick = function (e) {

        var txt1 = document.getElementById("comprimento").value;

        var txt2 = document.getElementById("largura").value;

        var txt3 = document.getElementById("mQuadrado").value;


        // WARNING: For GET requests, body is set to null by browsers.

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var mensagem = this.responseText;

                alert(mensagem);
            }
        });

        xhr.open("GET", "https://localhost:7183/api/aula8Controller/valorTerreno?comprimento=" + txt1 + "&largura=" + txt2 + "&valorMetroQuadrado=" + txt3);

        xhr.send();

    }
}

