import { login } from "./campaign_commmand";

interface userInterface {
    firstName:string;
    lastName:string;
    lang:string;
    belongsToCampany:string;
    role:string;
    email:string;


}

function clickOnUserButtonInSideMenuBar(){
    cy.get('#lyt_link_routto_users').click();

}
function clickOnAddNewUserAtUserPage(){
    cy.get('#usr_ov_btn_new_user').click();
}
function enterFirstNameAtCreateUserPage(firstName:any){
    cy.get('#usr_dtl_txt_first_name').type(firstName['firstName'])
}
function enterLastNameAtCreateUserPage(lastName:any){
   cy.get('#usr_dtl_txt_last_name').type(lastName['lastName'])
}
function selectLanguageAtUserCreatePage(lang:any){
    cy.get('#usr_dtl_select_language').click();
    cy.get('div>mat-option>span.mdc-list-item__primary-text').contains(lang['lang']).click()
}
function selectBelongsToComapny(belongsToCampany:any){
    cy.get('#usr_dtl_txt_owner').click({force:true});
    cy.get('div>mat-option>span.mdc-list-item__primary-text').contains(belongsToCampany['belongsToCampany']).click()
}
function selectRoleAtCreatUserPage(role:any){
    //cy.get('#mat-mdc-chip-list-input-0').click()
    cy.get('#mat-mdc-chip-list-input-0').click()
    cy.get('div>mat-option>span.mdc-list-item__primary-text').contains(role['role']).click()
}
function enterEmailAtCreateUserPage(email:any){
    cy.get('#usr_dtl_email').type(email['email'])
}

function CreateNewUser(userdata: userInterface){
    login();
    clickOnUserButtonInSideMenuBar();
    clickOnAddNewUserAtUserPage();
    enterFirstNameAtCreateUserPage(userdata);
    enterLastNameAtCreateUserPage(userdata);
    selectLanguageAtUserCreatePage(userdata);
    selectBelongsToComapny(userdata);
    selectRoleAtCreatUserPage(userdata);
    enterEmailAtCreateUserPage(userdata);



}
export{
    CreateNewUser,
    clickOnUserButtonInSideMenuBar,
    clickOnAddNewUserAtUserPage

}