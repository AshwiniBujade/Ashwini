interface siteInterface {
    network: string;
    name:string;
    decription:string;
    language:string;
    address:string;
    player:string
}

function clickOnPublisherButtonAtSideMenuBar() {
    cy.get('#lyt_link_routto_publisher').click();

}
function clickOnAddNewSiteButtonAtSiteManagementPage() {
    cy.get('#site_btn_add_new').click();
}
function clickOnSiteButtonInsubMenuBar(){
    cy.get('#lyt_link_routto_publisher_site').click()
}
function selectNetworkAtCreateSitePage(network:string) {
    cy.get('#site_txt_network_id').click();
    cy.get('div>mat-option>span.mdc-list-item__primary-text').contains(network).click()
}
function selectLanguageAtCreateSitePage(language:string) {
    cy.get('#site_select_language').click();
    cy.get('div>mat-option>span.mdc-list-item__primary-text').contains(language).click();
}

function CreateSiteInPublisherPage(site:siteInterface){
    clickOnPublisherButtonAtSideMenuBar();
    cy.wait(10000)
    //clickOnSiteButtonInsubMenuBar();
    clickOnAddNewSiteButtonAtSiteManagementPage();
    cy.get('#site_txt_name').type(site['name'])
    selectLanguageAtCreateSitePage(site['language'])
    //selectNetworkAtCreateSitePage(site['network'])
    cy.get('#site_txt_desc').click()
    .type('create site');

    



}



export {
    clickOnPublisherButtonAtSideMenuBar,
    clickOnAddNewSiteButtonAtSiteManagementPage,
    selectNetworkAtCreateSitePage,
    selectLanguageAtCreateSitePage,
    siteInterface,
    CreateSiteInPublisherPage,
    clickOnSiteButtonInsubMenuBar

}