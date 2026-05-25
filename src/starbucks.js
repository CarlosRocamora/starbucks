export function contabilizarQuantidadeDeCafe(listaPedidos) {
    let quantidadeDeCafe = 0
    for (let i = 0; i < listaPedidos.length; i++) {
        if (listaPedidos[i].nome == "café") {
            quantidadeDeCafe++
        }
    }
    return quantidadeDeCafe
} 