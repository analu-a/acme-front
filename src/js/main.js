import { getFilmes,postFilme} from "./filmes.js"

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

const btnAddFilme = document.getElementById('criar')

async function adicionarFilme(){
    const nome = document.getElementById('nome').value
    const sinopse = document.getElementById('sinopse').value
    const duracao = document.getElementById('duracao').value
    const data_lancamento = document.getElementById('data_lancamento').value
    const data_relancamento = document.getElementById('data_relancamento').value
    const foto_capa = document.getElementById('foto_capa').value
    const valor_unitario = document.getElementById('valor_unitario').value

    try {
        const novoFilme = {}
        novoFilme.nome = nome
        novoFilme.sinopse = sinopse
        novoFilme.duracao = duracao
        novoFilme.data_lancamento = data_lancamento
        novoFilme.data_relancamento = data_relancamento
        novoFilme.foto_capa = foto_capa
        novoFilme.valor_unitario = valor_unitario
        console.log(novoFilme)
        await postFilme(novoFilme)
    } catch (error) {
        console.log(error)
    }

}

btnAddFilme.addEventListener('click', adicionarFilme)


