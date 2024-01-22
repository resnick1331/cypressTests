/// <reference types="cypress" />
/// <reference types="cypress-downloadfile"/>

import { HeroesPage } from "../../page-objects/heroes-page";

const heroesPage = new HeroesPage()

it("should navigate to the page", () => {

    heroesPage.navigate()

    cy.get('img.hero').each((image,$index) => {
        cy.wrap(image).invoke('attr','src')        
            .then((path) => {
                cy.log(path)
                cy.downloadFile(path,'downloads',`hero_${$index}.png`)
            })
        cy.wrap(image).invoke('attr','alt')
            .then((alt) => {
                cy.log(alt)
            })
    })
    
    // cy.get('<a class="CardLayout__CardWrap-c9pp6v-0 BattlegroundsCard__BgCardWrap-xsd8tv-0 iHzApC CardWrap hero" href="/battlegrounds/57944-a-f-kay"><div class="CardLayout__CardView-c9pp6v-1 BattlegroundsCard__BgCardView-xsd8tv-1 bmZmcE Card hero" src="https://d15f34w2p8l1cc.cloudfront.net/hearthstone/5fb9378a6c5ef3f0e4eec5a4f3df55ea2417246b923911d2f05a4b6799a5bf68.png" style="transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);"><div class="PerspectiveWrapper__Wrapper-sc-1e2pchd-0 bHUoQS" style="transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);"><img class="CardLayout__CardImage-c9pp6v-5 BattlegroundsCard__BgCardImage-xsd8tv-2 eemsZP CardImage loaded hero" src="https://d15f34w2p8l1cc.cloudfront.net/hearthstone/5fb9378a6c5ef3f0e4eec5a4f3df55ea2417246b923911d2f05a4b6799a5bf68.png" alt="A. F. Kay"></div></div><h5 class="CardLayout__CardLabel-c9pp6v-7 BattlegroundsCard__BgCardLabel-xsd8tv-3 hTxZNX CardLabel hero">A. F. Kay</h5></a>',{ timeout: 6000 }).click()

    //cy.get('.card_item').click()

         
})

///You can typically solve this by breaking up a chain. For example, rewrite:

