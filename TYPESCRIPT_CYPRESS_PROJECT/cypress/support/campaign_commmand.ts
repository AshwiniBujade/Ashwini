
 interface campaignInterface {

    campaignType?: string;
    budget?: number;
    max_cpm?: number;
    contacts?: number;
    playouts_number?: number;
    playouts_frequency?: string;
    title?: string;
    price?: string;
    description?: string;
    gender?:string
    benificiary?:string;
    invoice?:any

 }
  //// login 
    function login() {
        cy.fixture('logindata.json').then((logindata) => {
          const config=logindata['login']
        cy.visit(config['url']);
        cy.get('#mat-input-0').type(config['emailId']);
        cy.get('#mat-input-1').type(config['password'])
        cy.get('#login_submit_btn').click();
        cy.wait(10000);
        cy.get('#lyt_btn_side_nav').click();
         })

    }
    function ClickOnCampignButtonInMenuItem() {
        cy.get('#lyt_link_routto_cmpgn').click();
    }
    function ClickOnPlanNewCampaignButton() {
        cy.get('#cmpgnlst_btn_open').click();
    }
    // select date range in plan new campaign page
    function SelectPlanningCriteria(campaigndata: any,index:number=0) {
        switch (campaigndata['campaignType']) {
            case "budget1":
                cy.wait(10000);
                cy.get('#budget').click();
                cy.get('#pln_number').type(campaigndata['budget']);
                break;
            case "budget optimized":
                cy.wait(10000);
                cy.get('#budget').click();
               cy.get('#mat-mdc-slide-toggle-3-button').click();
               //cy.get('button[tabindex="-1"]').eq(index).click();
                cy.get('#pln_number').type(campaigndata['budget']);
                cy.get('#pln_number_cpm').type(campaigndata['max_cpm'])
                break;
            case "Contact":
                cy.wait(20000);
                cy.get('#number_of_contacts').click();
                cy.get('#pln_number').type(campaigndata['contacts'])
                break;
            case "playouts number":
                cy.get('#number_of_playouts').click();
                cy.get('#pln_number').type(campaigndata['playouts_number']);
                break;
            case "playouts frequncy":
                cy.wait(10000);
                cy.get('#number_of_playouts').click();
                cy.get('#mat-mdc-slide-toggle-4-button').click();
                cy.get('#pln_select_frequency').click();
                cy.get('div>mat-option>span.mdc-list-item__primary-text').contains(campaigndata['playouts_frequency']).click();
                break;
            default:
                cy.wait(10000);
                cy.get('#budget').click();
                cy.get('#pln_number').type(campaigndata['budget']);
        }
    }
    //Select the dateRange
    function SelectDateRangeFromDatePicker() {
        cy.get('button[aria-label="Open calendar"]').click();
        cy.get('button.mat-calendar-period-button.mdc-button.mat-mdc-button.mat-unthemed.mat-mdc-button-base').click();
        cy.get('button.mat-calendar-body-cell.mat-calendar-body-active').invoke('attr', 'aria-label')
        cy.get('button.mat-calendar-body-cell.mat-calendar-body-active').click();
        cy.get('button.mat-calendar-body-cell.mat-calendar-body-active').invoke('attr', 'aria-label')
        cy.get('button.mat-calendar-body-cell.mat-calendar-body-active').click();
        cy.get('button.mat-calendar-body-cell.mat-calendar-body-active').invoke('attr', 'aria-label')
        cy.get('button.mat-calendar-body-cell.mat-calendar-body-active').click();
        cy.get('button.mat-calendar-period-button.mdc-button.mat-mdc-button.mat-unthemed.mat-mdc-button-base').click();
        cy.get('button.mat-calendar-body-cell.mat-calendar-body-active').invoke('attr', 'aria-label')
        cy.get('button.mat-calendar-body-cell.mat-calendar-body-active').click();
        cy.get('button.mat-calendar-body-cell.mat-calendar-body-active').invoke('attr', 'aria-label')
        cy.get('button.mat-calendar-body-cell.mat-calendar-body-active').click();
        cy.get('button.mat-calendar-body-cell.mat-calendar-body-active').invoke('attr', 'aria-label')
        cy.get('button.mat-calendar-body-cell.mat-calendar-body-active').click();
        // cy.get('button.mat-calendar-period-button.mdc-button.mat-mdc-button.mat-unthemed.mat-mdc-button-base').click();
        // cy.get('div.mat-calendar-body-cell-content.mat-focus-indicator.mat-calendar-body-today').contains('2023').click();
        // cy.get('div.mat-calendar-body-cell-content.mat-focus-indicator.mat-calendar-body-today').contains('MAR').click();
        // //cy.get('div.mat-calendar-body-cell-content.mat-focus-indicator.mat-calendar-body-today.mat-calendar-body-selected').click();
        // cy.get(':nth-child(6) > [data-mat-col="4"] > .mat-calendar-body-cell').click();
        // cy.get('button.mat-calendar-period-button.mdc-button.mat-mdc-button.mat-unthemed.mat-mdc-button-base').click();
        // cy.get('div.mat-calendar-body-cell-content.mat-focus-indicator.mat-calendar-body-today').contains('2023').click();
        // cy.get('div.mat-calendar-body-cell-content.mat-focus-indicator.mat-calendar-body-today').contains('MAR').click();
        // cy.get('div.mat-calendar-body-cell-content.mat-focus-indicator.mat-calendar-body-today.mat-calendar-body-selected').click();
    }
    //Select target group on plan new campaign page
    function ClickOnAddTargetGroup(gender:any) {
        cy.get('#target_grp_btn_add_time').click();
        cy.get('#trgt_grps_select_gender').click();
        cy.get('div>mat-option>span.mdc-list-item__primary-text').contains(gender['gender']).click()
    }
    //Click on next button in plan new campaign page
    function ClickOnNextButtonOnPlanNewCampaignPage() {
        cy.get('#invc_btn_next').click();
    }
    function SelectBenificiaryAtNewCampaignPage(benificiary:any) {
        cy.get('#ownr_select_owner').click();
        cy.get('div>mat-option>span.mdc-list-item__primary-text').contains(benificiary['benificiary']).click();
    }
    function SelectInvoiceInvoiceReceipant(invoice:any) {
        cy.get('#cmp_txt_invoice_recipient').click();
        cy.get('div>mat-option>span.mdc-list-item__primary-text').contains(invoice['invoice']).click({force:true});
    }
    function ClickOnValueAddedServiceAtCampaignPage(value:any) {
            cy.get('#btn_add_value_added_service').click();
            cy.get('#title_txt1').type(value['title']);
            cy.get('#price_txt1').type(value['price']);
            cy.get('#cmp_txtarea_description1').type(value['description']);
        
        }
 //Create new Campign
 function CreateNewCampaign(campaigndata: campaignInterface) {
    login();
    ClickOnCampignButtonInMenuItem();
    ClickOnPlanNewCampaignButton();
    SelectPlanningCriteria(campaigndata,6)
    cy.wait(30)
    SelectDateRangeFromDatePicker();
    ClickOnAddTargetGroup(campaigndata);
    ClickOnNextButtonOnPlanNewCampaignPage();
    SelectBenificiaryAtNewCampaignPage(campaigndata);
    SelectInvoiceInvoiceReceipant(campaigndata)
    ClickOnValueAddedServiceAtCampaignPage(campaigndata);
    ClickOnNextButtonOnPlanNewCampaignPage();
    cy.wait(10000);
    cy.get('#invtry_chk_select_all-input').check();
    cy.get('#invc_btn_next').click()
 }

export{
    campaignInterface,
    login,
    CreateNewCampaign,
    

}