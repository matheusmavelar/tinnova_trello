import { faker } from '@faker-js/faker';

describe('Cenários de validação do método de criação do card dentro do board', () => {

    let auth = Cypress.env('auth')
    let id
    let idLista
    before(() => {
        cy.postBoard('/1/boards/?name=', faker.company.name(), auth.apiKey, auth.apiToken)
            .then(response => {
                id = response.body.id
                cy.getBoard('/1/boards/', id, '/lists?', auth.apiKey, auth.apiToken)
                    .then(response => {
                        idLista = response.body[0].id
                    })
            })
    })

    it('Criando um card no board com sucesso', () => {
        cy.postCardBoard('/1/cards/?', idLista, auth.apiKey, auth.apiToken)
            .then(response => {
                expect(response.status).to.equal(200)
            })
    })

    it('Tentando criar um card no board com apiToken inválido', () => {
        cy.postCardBoard('/1/cards/?', idLista, auth.apiKey, auth.apiTokenInvalido)
            .then(response => {
                expect(response.status).to.equal(401)
                expect(response.body).to.equal('invalid app token')
            })
    })

    it('Tentando criar um card no board com apiKey inválido', () => {
        cy.postCardBoard('/1/cards/?', idLista, auth.apiKeyInvalido, auth.apiToken)
            .then(response => {
                expect(response.status).to.equal(401)
                expect(response.body).to.equal('invalid key')
            })
    })

    it('Tentando criar um card em board que não existe', () => {
        cy.postCardBoard('/1/cards/?', '12', auth.apiKey, auth.apiToken)
            .then(response => {
                expect(response.status).to.equal(400)
                expect(response.body).to.equal('invalid value for idList')
            })
    })

    after(() => {
        cy.delete('/1/boards/', id, auth.apiKey, auth.apiToken)
    })

})

describe('Cenários de validação do método de deletar o card do board', () => {

    let auth = Cypress.env('auth')
    let id
    let idLista
    let idCard
    before(() => {
        cy.postBoard('/1/boards/?name=', faker.company.name(), auth.apiKey, auth.apiToken)
            .then(response => {
                id = response.body.id
                cy.getBoard('/1/boards/', id, '/lists?', auth.apiKey, auth.apiToken)
                    .then(response => {
                        idLista = response.body[0].id
                        cy.postCardBoard('/1/cards/?', idLista, auth.apiKey, auth.apiToken)
                            .then(response => {
                                idCard = response.body.id
                                cy.log(response)
                            })
                    })

            })
    })

    it('Deletando um card no board com sucesso', () => {
        cy.delete('/1/cards/', idCard, auth.apiKey, auth.apiToken)
            .then(response => {
                expect(response.status).to.equal(200)
            })
    })

    it('Tentando deletar um card no board com apiToken inválido', () => {
        cy.delete('/1/cards/', idCard, auth.apiKey, auth.apiTokenInvalido)
            .then(response => {
                expect(response.status).to.equal(401)
                expect(response.body).to.equal('invalid app token')
            })
    })

    it('Tentando deletar um card no board com apiKey inválido', () => {
        cy.delete('/1/cards/', idCard, auth.apiKeyInvalido, auth.apiToken)
            .then(response => {
                expect(response.status).to.equal(401)
                expect(response.body).to.equal('invalid key')
            })
    })

    it('Tentando deletar um card em board que não existe', () => {
        cy.delete('/1/cards/', '12', auth.apiKey, auth.apiToken)
            .then(response => {
                expect(response.status).to.equal(400)
                expect(response.body).to.equal('invalid id')
            })
    })
    after(() => {
        cy.delete('/1/boards/', id, auth.apiKey, auth.apiToken)
    })

})

