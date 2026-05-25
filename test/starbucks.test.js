import assert from 'node:assert'
import { contabilizarQuantidadeDeItens } from '../src/starbucks.js'

describe('Testes para gestão de cafeteria', () => {
    it('TC 1 - Ao menos 1 café na lista', () => {
        // Arrange
        const listaPedidos = [
            { nome: "café", valor: 4.00 },
            { nome: "bolo de cenoura", valor: 12.00 },
            { nome: "café com leite", valor: 5.00 }
        ]
        const itemPesquisado = "café"
        const retornoEsperado = 1

        // Act
        const quantidadeDeCafes = contabilizarQuantidadeDeItens(itemPesquisado, listaPedidos)

        // Assert
        assert.equal(retornoEsperado, quantidadeDeCafes)
    })

    it('TC 2 - Não ter nenhum café na lista', () => {
        // Arrange
        const listaPedidos = [
            { nome: "bolo de cenoura", valor: 12.00 },
            { nome: "café com leite", valor: 5.00 }
        ]
        const itemPesquisado = "café"
        const retornoEsperado = 0

        // Act
        const quantidadeDeCafes = contabilizarQuantidadeDeItens(itemPesquisado, listaPedidos)

        // Assert
        assert.equal(retornoEsperado, quantidadeDeCafes)
    })

    it('TC 3 - Ter 2 ou mais', () => {
        // Arrange
        const listaPedidos = [
            { nome: "café", valor: 4.00 },
            { nome: "bolo de cenoura", valor: 12.00 },
            { nome: "café com leite", valor: 5.00 },
            { nome: "café", valor: 4.00 },
        ]
        const itemPesquisado = "café"
        const retornoEsperado = 2

        // Act
        const quantidadeDeCafes = contabilizarQuantidadeDeItens(itemPesquisado, listaPedidos)

        // Assert
        assert.equal(retornoEsperado, quantidadeDeCafes)
    })

    it('TC 4 - Retornar uma lista de pedidos vazia', () => {
        // Arrange
        const listaPedidos = []
        const itemPesquisado = "café"
        const retornoEsperado = 0

        // Act
        const quantidadeDeCafes = contabilizarQuantidadeDeItens(itemPesquisado, listaPedidos)

        // Assert
        assert.equal(retornoEsperado, quantidadeDeCafes)
    })

    it('TC 5 - Filtrar por um item específico da lista', () => {
        // Arrange
        const listaPedidos = [
            { nome: "café", valor: 4.00 },
            { nome: "bolo de cenoura", valor: 12.00 },
            { nome: "café com leite", valor: 5.00 },
            { nome: "café", valor: 4.00 },
        ]
        const itemPesquisado = "bolo de cenoura"
        const retornoEsperado = 1

        // Act
        const quantidadeDeItens = contabilizarQuantidadeDeItens(itemPesquisado, listaPedidos)

        // Assert
        assert.equal(retornoEsperado, quantidadeDeItens)
    })
})