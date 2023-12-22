describe('Teste', () => {

    it('criarBoard', () => {
        cy.request({
            method: 'POST',
            url: 'https://api.trello.com/1/cards?idList=6585f75482efa3b16d07ec98&key=5d41b3b238b87cb8bef98e5c18c8fb76&token=ATTAedca4181a52a246dbed8eaebbd3db6102a56ba495b34e89aa482533ad828a044A940F839',
            header: 'Accept: application/json'
        }).then(response => {
            cy.log(response)
        })
    })

    it('buscarIdListaBoard', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.trello.com/1/boards/6585fa1049bfbfa5f5e955de/lists?key=5d41b3b238b87cb8bef98e5c18c8fb76&token=ATTAedca4181a52a246dbed8eaebbd3db6102a56ba495b34e89aa482533ad828a044A940F839',
            header: 'Accept: application/json'
        }).then(response => {
            cy.log(response)
        })
    })

    it('criarCardBoard', () => {
        cy.request({
            method: 'POST',
            url: 'https://api.trello.com/1/cards?idList=6585fa1049bfbfa5f5e955e6&key=5d41b3b238b87cb8bef98e5c18c8fb76&token=ATTAedca4181a52a246dbed8eaebbd3db6102a56ba495b34e89aa482533ad828a044A940F839',
            header: 'Accept: application/json'
            //"6585f4c194167730fdb5a4cd"
        }).then(response => {
            cy.log(response)
        })
    })

    it.only('deletarBoard', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://api.trello.com/1/cards/6585ff490ec9cfc8a9a49178?key=5d41b3b238b87cb8bef98e5c18c8fb76&token=ATTAedca4181a52a246dbed8eaebbd3db6102a56ba495b34e89aa482533ad828a044A940F839'
        }).then(response => {
            cy.log(response)
        })
    })
})





