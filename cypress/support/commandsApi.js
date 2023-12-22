
Cypress.Commands.add('getConta', (endPoint,idBoard,key,token) =>{
    cy.request({
        method: 'GET',
        url: Cypress.env('api_trello') + endPoint,
        qs:{idBoard: idBoard, key: key, token: token},
        headers: {
            'Accept': 'application/json'
        }
    })
})


Cypress.Commands.add('postBoard', (endPoint,name,key,token) =>{
    cy.request({
        method: 'POST',
        url: Cypress.env('api_trello') + endPoint,
        qs:{name: name, key: key, token: token},

    })
})