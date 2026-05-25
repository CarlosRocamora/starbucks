import assert from 'node:assert'
import { contabilizarQuantidadeDeCafe } from '../src/starbucks.js'

describe('Testes para gestão de cafeteria', () => {
    it('TC 1 - Ao menos 1 café na lista', () => {
        // Arrange
        const listaPedidos = [
            { nome: "café", valor: 4.00 },
            { nome: "bolo de cenoura", valor: 12.00 },
            { nome: "café com leite", valor: 5.00 }
        ]
        const retornoEsperado = 1

        // Act
        const quantidadeDeCafes = contabilizarQuantidadeDeCafe(listaPedidos)

        // Assert
        assert.equal(retornoEsperado, quantidadeDeCafes)
    })

    it('TC 2 - Não ter nenhum café na lista', () => {
        // Arrange
        const listaPedidos = [
            { nome: "bolo de cenoura", valor: 12.00 },
            { nome: "café com leite", valor: 5.00 }
        ]
        const retornoEsperado = 0

        // Act
        const quantidadeDeCafes = contabilizarQuantidadeDeCafe(listaPedidos)

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
        const retornoEsperado = 2

        // Act
        const quantidadeDeCafes = contabilizarQuantidadeDeCafe(listaPedidos)

        // Assert
        assert.equal(retornoEsperado, quantidadeDeCafes)
    })
})