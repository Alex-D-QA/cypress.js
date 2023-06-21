describe('Тестирование логина и пароля', function () {
    
    it('открываем сайт ', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail'). type('germandolnikov.ru')
        cy.get('#pass'). type('iLoveqastudio1')
        cy.get('#loginButton'). click()
        cy.contains('Нужно исправить проблему валидации')
        

        })
})
