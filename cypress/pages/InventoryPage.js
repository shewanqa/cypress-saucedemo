class InventoryPage{

    pageUrl = "https://www.saucedemo.com/inventory.htm";
       
    checkPageURL(){
       cy.url().should('eq', this.pageUrl);
    }

    navigate(){
       cy.visit(this.pageUrl);
    }

    
}
export default InventoryPage