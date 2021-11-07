it.only('successfully logs in', () => {
  cy.intercept('GET', '**/notes').as('getNotes')

  cy.login(
    '83d1326d-dd9d-47b9-81e8-ec72f5cb0f45@fp9klczf.mailosaur.net',
    's3Cre7P@sSw0rd',
    { cacheSession: false }
  )

  cy.wait('@getNotes', {timeout: 30000})
})