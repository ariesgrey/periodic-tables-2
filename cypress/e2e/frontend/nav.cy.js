// import Cypress?

describe("Nav", () => {
	context("Desktop Layout", () => {
		// Set viewport to 1920 x 1080 (HD Desktop)
		beforeEach(() => {
			cy.viewport(1920, 1080);
		});

		it("Navigates to the Search page", () => {
			// Start from the index page
			cy.visit(Cypress.env("localUrl"));

			// Find a link with an id attribute of "search" and click it
			cy.get("a[id='search']").click();

			// The new url should include "/search"
			cy.url().should("include", "/search");

			// The new page should contain an h1 with "Search"
			cy.get("h1").contains("Search");
		});

		it("Navigates to the New Reservation page", () => {
			// Start from the index page
			cy.visit(Cypress.env("localUrl"));

			// Find a link with an id attribute of "new-reservation" and click it
			cy.get("a[id='new-reservation']").click();

			// The new url should include "/reservations/new"
			cy.url().should("include", "/reservations/new");

			// The new page should contain an h1 with "New Reservation"
			cy.get("h1").contains("New Reservation");
		});

		it("Navigates to the New Table page", () => {
			// Start from the index page
			cy.visit(Cypress.env("localUrl"));

			// Find a link with an id attribute of "new-table" and click it
			cy.get("a[id='new-table']").click();

			// The new url should include "/tables/new"
			cy.url().should("include", "/tables/new");

			// The new page should contain an h1 with "Search"
			cy.get("h1").contains("New Table");
		});
	});

	context("Mobile Layout", () => {
		// Set viewport to 390 x 844 (iPhone 12/13/14)
		beforeEach(() => {
			cy.viewport(390, 844);
		});

		it("Navigates to the Search page", () => {
			// Start from the index page
			cy.visit(Cypress.env("localUrl"));

			// Find a button with an id attribute of "mobile-menu-button" and click it (open mobile sidebar)
			cy.get("button[id='mobile-menu-button']").click();

			// Find a div with an id attribute of "mobile-sidebar" and look within it
			cy.get("div[id='mobile-sidebar']").within(() => {
				// Find a link with an id attribute of "search" and click it
				cy.get("a[id='search']").click({
					multiple: true,
				});
			});

			// The new url should include "/search"
			cy.url().should("include", "/search");

			// The new page should contain an h1 with "Search"
			cy.get("h1").contains("Search");
		});

		it("Navigates to the New Reservation page", () => {
			// Start from the index page
			cy.visit(Cypress.env("localUrl"));

			// Find a button with an id attribute of "mobile-menu-button" and click it (open mobile sidebar)
			cy.get("button[id='mobile-menu-button']").click();

			// Find a div with an id attribute of "mobile-sidebar" and look within it
			cy.get("div[id='mobile-sidebar']").within(() => {
				// Find a link with an id attribute of "new-reservation" and click it
				cy.get("a[id='new-reservation']").click({
					multiple: true,
				});
			});

			// The new url should include "/reservations/new"
			cy.url().should("include", "/reservations/new");

			// The new page should contain an h1 with "New Reservation"
			cy.get("h1").contains("New Reservation");
		});

		it("Navigates to the New Table page", () => {
			// Start from the index page
			cy.visit(Cypress.env("localUrl"));

			// Find a button with an id attribute of "mobile-menu-button" and click it (open mobile sidebar)
			cy.get("button[id='mobile-menu-button']").click();

			// Find a div with an id attribute of "mobile-sidebar" and look within it
			cy.get("div[id='mobile-sidebar']").within(() => {
				// Find a link with an id attribute of "new-table" and click it
				cy.get("a[id='new-table']").click({
					multiple: true,
				});
			});

			// The new url should include "/tables/new"
			cy.url().should("include", "/tables/new");

			// The new page should contain an h1 with "Search"
			cy.get("h1").contains("New Table");
		});
	});
});
