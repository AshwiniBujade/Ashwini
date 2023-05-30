/// <reference types="cypress" />
import { CreateNewCampaign } from "../support/campaign_commmand";

//import { cy } from 'cypress';

describe('create campaign Scenario', () => {
    it('craete campaign for conatct', () => {
        cy.fixture('campaign.json').then(campaignjson =>{
            const config=campaignjson['campaign001']
            CreateNewCampaign(config);
        })


    })
})