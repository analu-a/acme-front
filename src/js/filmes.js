export async function getFilmes (){
    const url = 'http://localhost:8080/v2/FilmesACME/filmes'
    const response = await fetch(url)
    const data = await response.json()
    return data.filmes
}

export async function getFilme (id){
    const url = `http://localhost:8080/v2/FilmesACME/filmes/${id}`
    const response = await fetch(url)
    const data = response.json()
    return data.filme[1]

}

// export async function postFilme(filme){
//     const url = 'http://localhost:8080/v2/FilmesACME/filme'
//     const options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(filme)
//     }
//     const response = await fetch(url, options)

//     return response.ok
// }


export async function putFilme(filme){
    const url = `http://localhost:8080/v2/FilmesACME/filme/${filme.id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(filme)
    }
    const response = await fetch(url, options)

    return response.ok
}

export async function deleteFilme(filme){
    const url = `http://localhost:8080/v2/FilmesACME/filme/${filme}`
    const options = {
        method: 'DELETE',
      
    }
    const response = await fetch(url, options)

    return response.ok
}