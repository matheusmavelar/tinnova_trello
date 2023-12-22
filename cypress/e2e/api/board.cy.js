describe('Teste', () => {
    it.skip('criarBoard', () => {
        cy.postBoard('/1/boards/?name=', 'teste trello', '5d41b3b238b87cb8bef98e5c18c8fb76', 'ATTAedca4181a52a246dbed8eaebbd3db6102a56ba495b34e89aa482533ad828a044A940F839')
            .then(response => {
                cy.log(response)
            })
    })

    it('buscarBoard', () => {
        cy.getConta('/1/boards/', '65860ae3ccafdc0db1cd374b', '5d41b3b238b87cb8bef98e5c18c8fb76', 'ATTAedca4181a52a246dbed8eaebbd3db6102a56ba495b34e89aa482533ad828a044A940F839')
            .then(response => {
                cy.log(response)
            })
     })

    it.only('deletarBoard', () => {
        cy.deleteBoard('/1/boards/', '65860ae3ccafdc0db1cd374b', '5d41b3b238b87cb8bef98e5c18c8fb76', 'ATTAedca4181a52a246dbed8eaebbd3db6102a56ba495b34e89aa482533ad828a044A940F839')
        .then(response => {
            cy.log(response)
        })
    })

})





