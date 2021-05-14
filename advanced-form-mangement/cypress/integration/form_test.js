describe('New Form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
    it('can type and see proper info', () => {
        cy.get('input[name=name]').type('Tamara Leonard').should('have.value', 'Tamara Leonard')
        cy.get('input[name=email]').type('tamaraleonard46@gmail.com').should('have.value', 'tamaraleonard46@gmail.com')
        cy.get('input[name=password]').type('1am late night coding').should('have.value', '1am late night coding')
        cy.get(':nth-child(3) > input').click()
        cy.get('button').click()
        cy.get(':nth-child(7) > input').then(($input) => {
            expect($input[0].validationMessage).to.eq('this field is required')})
        
    })

})