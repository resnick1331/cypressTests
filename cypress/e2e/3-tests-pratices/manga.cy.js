/// <reference types="cypress" />

import { WebtoonPage } from "../../page-objects/webtoon-page";

const webtoonPage = new WebtoonPage()

describe('check manga updates', () => {
    it("should navigate to the page", () => {

        cy.visit("https://manganato.com/")
        const manga = ["Dear shimazaki in the Peaceful Land","One Piece", "Jujutsu Kaisen", "Ippon Again!","Mieruko-Chan"];
        const file = [];
        const obj = {};

        manga.forEach((mangaTitle, index) => {
            cy.get('[id="search-story"]').type(`${mangaTitle}{enter}`);
            //cy.get("li").contains(manga, {matchCase : false}).click();

            cy.get('a.item-chapter').first().invoke("text").then((loggg) => {
                file[index] = {manga : mangaTitle, chapter : loggg};
            });
        });
        
        cy.writeFile("cypress/fixtures/mangaList.json",file)
            
    });

});