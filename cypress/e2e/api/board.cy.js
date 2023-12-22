describe('Teste', () => {
    it('criarBoard', () => {
        cy.postBoard('/1/boards/?name=', 'teste trello', '5d41b3b238b87cb8bef98e5c18c8fb76', 'ATTAedca4181a52a246dbed8eaebbd3db6102a56ba495b34e89aa482533ad828a044A940F839')
            .then(response => {
                cy.log(response)
            })
    })

    it.only('buscarBoard', () => {
        cy.postBoard('/1/boards/', '658603ce89f48e59deeb5d8d', '5d41b3b238b87cb8bef98e5c18c8fb76', 'ATTAedca4181a52a246dbed8eaebbd3db6102a56ba495b34e89aa482533ad828a044A940F839')
            .then(response => {
                cy.log(response)
            })
     })

    it('deletarBoard', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://api.trello.com/1/boards/6585f29b4d29b2defecb33bc?key=5d41b3b238b87cb8bef98e5c18c8fb76&token=ATTAedca4181a52a246dbed8eaebbd3db6102a56ba495b34e89aa482533ad828a044A940F839'

        }).then(response => {
            cy.log(response)
        })
    })

})





