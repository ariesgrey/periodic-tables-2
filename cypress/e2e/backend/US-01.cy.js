describe("App", () => {
	context("Not Found Page", () => {
		it("returns 404 for non-existent route", () => {
			// GET request to a non-existent route
			cy.request({
				method: "GET",
				url: `${Cypress.env("localUrl")}test`,
				failOnStatusCode: false,
			}).then((response) => {
				// Expecting the response status code to be 404
				expect(response.status).to.eq(404);
			});
		});
	});
});
