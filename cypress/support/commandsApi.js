Cypress.Commands.add('getConta', (endPoint, idBoard, key, token) => {
    cy.request({
        method: 'GET',
        url: Cypress.env('api_trello') + endPoint + idBoard,
        failOnStatusCode: false,
        qs: { key: key, token: token },
        headers: {
            'Accept': 'application/json'
        }
    })
})

Cypress.Commands.add('postBoard', (endPoint, name, key, token) => {
    cy.request({
        method: 'POST',
        url: Cypress.env('api_trello') + endPoint,
        failOnStatusCode: false,
        qs: { name: name, key: key, token: token },

    })
})

Cypress.Commands.add('delete', (endPoint, id, key, token) => {
    cy.request({
        method: 'DELETE',
        url: Cypress.env('api_trello') + endPoint + id,
        failOnStatusCode: false,
        qs: { key: key, token: token },

    })
})

Cypress.Commands.add('getBoard', (endPoint, idBoard, endpoint2, key, token) => {
    cy.request({
        method: 'GET',
        url: Cypress.env('api_trello') + endPoint + idBoard + endpoint2,
        failOnStatusCode: false,
        qs: { key: key, token: token },
        headers: {
            'Accept': 'application/json'
        }
    })
})


Cypress.Commands.add('postCardBoard', (endPoint, idList, key, token) => {
    cy.request({
        method: 'POST',
        url: Cypress.env('api_trello') + endPoint,
        failOnStatusCode: false,
        qs: { idList: idList, key: key, token: token },

    })
})
