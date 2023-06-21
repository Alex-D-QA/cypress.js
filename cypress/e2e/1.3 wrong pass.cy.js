describe('Тестирование неверного логина и пароля', function () {
    
    it('открываем сайт ', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail'). type('german@dolnikov.ru')
        cy.get('#pass'). type('23456')
        cy.get('#loginButton'). click()
        cy.contains('Такого логина или пароля нет')
        cy.get('#exitMessageButton > .exitIcon')
        })
})
