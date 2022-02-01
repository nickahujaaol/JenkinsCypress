describe('Test local spring boot application', () => {
    it('Hello World Test', () => {
        cy.request({
            url: 'localhost:8090'
          }).then((resp) => {
            expect(resp.status).to.eq(200);
          });
    })
  })