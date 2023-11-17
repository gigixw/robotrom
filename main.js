const controle = document.querySelectorAll(".controle-ajuste")

controle.forEach( (elemento) => {
   elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent)
        console.log(evento.target.parentNode)
   })
})

function manipulaDados(operacao) {
    const braco = document.querySelector("#braco")

    
    if(operacao === "-") {
        braco.value = parseInt(braco.value) - 1 
    } else {
        braco.value = parseInt(braco.value) + 1 
    }
}
  
