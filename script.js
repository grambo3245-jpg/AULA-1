document.title = "Novo titulo "

function mudacordotexto(){
document.body.style.color ="rgb(27, 224, 224)";
}

botao = document.querySelector("button")


botao.addEventListener("click",mudacordotexto )


window.setInterval(mudacordotexto,200)