export function contabilizarQuantidadeDeItens(itemEsperado, listaPedidos) {
    let quantidadeItemEsperado = 0
    for (let i = 0; i < listaPedidos.length; i++) {
        const element = listaPedidos[i]
        if (listaPedidos[i].nome == itemEsperado) {
            quantidadeItemEsperado++
        }
    }
    return quantidadeItemEsperado
}