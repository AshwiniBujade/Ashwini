import { CreateNewUser } from "../support/user_cammand";

describe('create campaign Scenario', () => {
    it('craete campaign for conatct', () => {
        cy.fixture('user.json').then(userjson =>{
            const config=userjson['createUser']
            CreateNewUser(config);
            
        })


    })
})