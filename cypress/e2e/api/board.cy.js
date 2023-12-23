import { faker } from '@faker-js/faker';

describe('Cenários de validação do método de criação do board', () => {

    let auth = Cypress.env('auth')
    let id
    it('Criando board com sucesso', () => {
        cy.postBoard('/1/boards/?name=', faker.company.name(), auth.apiKey, auth.apiToken)
            .then(response => {
                id = response.body.id
                expect(response.status).to.equal(200)
            })
    })

    it('Tentando criar board com apiKey inválido', () => {
        cy.postBoard('/1/boards/?name=', faker.company.name(), auth.apiKeyInvalido, auth.apiToken)
            .then(response => {
                expect(response.status).to.equal(401)
                expect(response.body).to.equal('invalid key')
            })
    })

    it('Tentando criar board com apiToken inválido', () => {
        cy.postBoard('/1/boards/?name=', faker.company.name(), auth.apiTokenInvalido, auth.apiToken)
            .then(response => {
                expect(response.status).to.equal(401)
                expect(response.body).to.equal('invalid key')
            })
    })

    after(() => {
        cy.delete('/1/boards/', id, auth.apiKey, auth.apiToken)
    })

})

describe('Cenários de validação do método de deletar o board', () => {

    let auth = Cypress.env('auth')
    let id
    before(() => {
        cy.postBoard('/1/boards/?name=', faker.company.name(), auth.apiKey, auth.apiToken)
            .then(response => {
                id = response.body.id
            })
    })
    it('Deletando board com sucesso', () => {
        cy.delete('/1/boards/', id, auth.apiKey, auth.apiToken)
            .then(response => {
                expect(response.status).to.equal(200)
            })
    })

    it('Tentando deletar board com apiKey inválido', () => {
        cy.delete('/1/boards/', id, auth.apiKeyInvalido, auth.apiToken)
            .then(response => {
                expect(response.status).to.equal(401)
                expect(response.body).to.equal('invalid key')
            })
    })

    it('Tentando deletar board com apiToken inválido', () => {
        cy.delete('/1/boards/', id, auth.apiToken, auth.apiTokenInvalido)
            .then(response => {
                expect(response.status).to.equal(401)
                expect(response.body).to.equal('invalid key')
            })
    })

})

