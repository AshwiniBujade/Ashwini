
import { CreateSiteInPublisherPage } from "../support/publisher_command";


describe('publisher', () => {
    it('site creation', () => {
        
       

        cy.fixture('site.json').then(site=>{
            const config=site['siteTestCase']
            const randomNumber=Math.floor(Math.random()*1000)
            const siteName=config['name'] + randomNumber;
            config['name']=siteName;
            CreateSiteInPublisherPage(config)
        })
       
       

    })
})