


function clickONTenantAtSideMenuBarButton(){
    cy.get('#lyt_link_routto_tenants').click();
}

function clickOnCreateNewTenantAtTenantPage(){
    cy.get('#tnt_ov_menu_new_account').click();
}

function clickOnAdvertiserAccountAtTenantPage(){
    cy.get('#tnt_ov_btn_new_client').click();
}
function enterFirstNameAtAdvertiserAccountPage(firstName:any){
    cy.get('#tnt_txt_name').type(firstName)
}
function enterVatNumberAtAdvertiserAccountPage(lastName:any){
    cy.get('#tnt_txt_vat').type('')
}