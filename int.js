var listaFilmes = ["https://apenasimagine.com.br/wp-content/uploads/2015/11/lobo-wall-street.jpg", "https://br.web.img2.acsta.net/pictures/14/03/28/10/18/433386.jpg", "https://img1.ak.crunchyroll.com/i/spire3/cbb55a6382682bf71e91f685c6473c5a1487736090_full.jpg"];
// elemento             1                      2          3                
// indice              0                      1          2                    

// elemento 4 indice 3 '' .push '' usado para adicionar ou empurrar mais um item a nossa lista
listaFilmes.push("https://blogbbm.com/wp-content/uploads/2021/06/One-Piece-99.jpg");
// elemento 5 indice 4
listaFilmes.push("https://img1.ak.crunchyroll.com/i/spire4/727a407a607f1ddcc1789ed995beddd01658530970_main.jpg");

//valor inicial.     condição.   expressão final
for (var indice = 0; indice < listaFilmes.length; indice++) {
    document.write("<img src=" + listaFilmes[indice] + ">");

}
// "Function" condição para a ativação do código, se seguida partirá para a segunda "function"
function adicionarFilme() {
    var campoFF = document.getElementById("filme").value;
    if (campoFF.endsWith(".jpg")) { 
    listarFilmesT(campoFF);
} else {
    console.error("Endereço inválido");
}
    document.getElementById("filme").value = "";
}

// "function" responsável pela adição 
function listarFilmesT(campoFF) {
    console.log(campoFF);
    var elementoFF = "<img src =" + campoFF + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFF;


}

