import { getFilmes,} from "./filmes.js"

// getFilmes()

// getFilme(1)


function criarCard (filme){
    const card = document.createElement('div')
    const img = document.createElement('img')
    img.src = filme.foto_capa
    card.classList.add('w-30')
    img.classList.add('w-30', 'h-40','rounded-lg')
    card.append(img)
    return card
}

async function preencherContainer() {
    const container = document.getElementById('cards-filme')
    const filmes = await getFilmes()
filmes.forEach(filme => {
    const card = criarCard(filme)
    container.appendChild(card)
    
});


    
}
 preencherContainer()



// const filme = 
// {
//         "nome": "Testeeeee Leonid",
//         "sinopse": "Fazendo parte da franquia Invocação do Mal, em A Freira, após uma irmã cometer suicídio em um convento na Romênia,\n o Vaticano envia um padre atormentado e uma noviça para investigar o ocorrido. Arriscando suas vidas, a fé e até suas almas,\n os dois descobrem um segredo profano no local, confrontando-se com uma força do mal que toma a forma de uma freira demoníaca e transforma o convento num campo de batalha espiritual.",
//         "duracao": "01:37:00",
//         "data_lancamento": "2018-09-06",
//         "data_relancamento":"2018-09-06",
//         "foto_capa": "https://br.web.img3.acsta.net/c_310_420/pictures/18/07/18/21/53/1348208.jpg",
//         "valor_unitario": 50


// }

// await postFilme(filme)
