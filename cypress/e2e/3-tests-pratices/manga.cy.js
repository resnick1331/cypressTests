/// <reference types="cypress" />

import { WebtoonPage } from "../../page-objects/webtoon-page";

const webtoonPage = new WebtoonPage()

it("should navigate to the page", () => {

    cy.visit("https://manganato.com/")
    const manga = "Dear shimazaki in the Peaceful Land";
    const file={};
    file.manga = manga;
    cy.get('[id="search-story"]').type(`${manga}{enter}`);
    //cy.get("li").contains(manga, {matchCase : false}).click();

    cy.get('a.item-chapter').first().invoke("text").then((loggg) => {
        file.chapter = loggg;
        cy.writeFile("cypress/fixtures/mangaList.json",file)
    })

         
})

//})