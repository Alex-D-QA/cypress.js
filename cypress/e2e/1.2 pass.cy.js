describe('Тестирование восстановления пароля', function () {
    
    it('открываем сайт ', function () {
        cy.visit('https://login.qa.studio/');
    
        cy.get('#forgotEmailButton').click()
        cy.get('#mailForgot'). type('lex-521k@list.ru')
        cy.get('#restoreEmailButton'). click()
        cy.contains('Успешно отправили пароль на e-mail')
        cy.get('#exitMessageButton > .exitIcon')
        })
})
