const pescaria_model = (id, nome_cidade, quantidade, status) => {
    let json = {
        "id": id,
        "nome_cidade": nome_cidade,
        "quantidade": quantidade
    }
    return json
}

module.exports = {
    pescaria_model
}