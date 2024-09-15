document.addEventListener("DOMContentLoaded", ()=>{
    alert(`Clique no bloco para adicionar na tela`)
    const grade = document.querySelectorAll(".minecraft #block")
    const inventario = document.querySelectorAll(".inventory #item")

    let classe = ""
    let classeFundo = ""

    inventario.forEach((item, index) =>
        item.addEventListener("click", ()=>{
            classe = `${item.className}`
            console.log(` bloco de índice ${index + 1}, classe : ${classe}`)
        })
    )

    grade.forEach((bloco, index) =>
        bloco.addEventListener("click", ()=>{
            bloco.className = ``
            bloco.classList.add(`${classe}`)
            console.log(` bloco de índice ${index + 1}, classe : ${classe}`)
        })
    )
})

/**
 *terra
 https://img.freepik.com/vetores-premium/padrao-de-chao-de-grama-de-bloco-de-fundo-de-jogo-de-pixel_8071-46689.jpg
 */
