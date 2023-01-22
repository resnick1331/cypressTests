/// <reference types="cypress" />

import { WebtoonPage } from "../../page-objects/webtoon-page";

const webtoonPage = new WebtoonPage()

it("should navigate to the page", () => {

    webtoonPage.navigate()

    cy.get('.btn_search', { timeout: 6000 }).type("Lore Olympus{enter}")

    cy.get('.card_item').click()

         
})

//})