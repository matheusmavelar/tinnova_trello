describe('Teste', () => {

    it.skip('criarBoard', () => {
        cy.postBoard('/1/boards/?name=', 'teste trello', '5d41b3b238b87cb8bef98e5c18c8fb76', 'ATTAedca4181a52a246dbed8eaebbd3db6102a56ba495b34e89aa482533ad828a044A940F839')
            .then(response => {
                cy.log(response)
            })
    })

    it('buscarIdListaBoard', () => {
        cy.getBoard('/1/boards/', '65860ee48320e39f8c1512ab', '/lists?','5d41b3b238b87cb8bef98e5c18c8fb76', 'ATTAedca4181a52a246dbed8eaebbd3db6102a56ba495b34e89aa482533ad828a044A940F839')
        .then(response => {
            cy.log(response)
        })
    })

    it.skip('criarCardBoard', () => {
        cy.postCardBoard('/1/cards/?', '65860ee48320e39f8c1512b2', '5d41b3b238b87cb8bef98e5c18c8fb76', 'ATTAedca4181a52a246dbed8eaebbd3db6102a56ba495b34e89aa482533ad828a044A940F839')
            .then(response => {
                cy.log(response)
            })
    
    })

    it.only('deletarCard', () => {
        cy.deleteCard('/1/cards/', '658611c29e36f647a05066ae', '5d41b3b238b87cb8bef98e5c18c8fb76', 'ATTAedca4181a52a246dbed8eaebbd3db6102a56ba495b34e89aa482533ad828a044A940F839')
        .then(response => {
            cy.log(response)
        })
     })
})





