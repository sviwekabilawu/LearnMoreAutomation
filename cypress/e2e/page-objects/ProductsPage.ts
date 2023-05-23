/// <reference types='cypress' />
class ProductsPage {

    static filter() {
        return cy.get(".product_sort_container")
    }

    static item_price() {
        return cy.get(".inventory_item_price")
    }
    static shopping_cart() {
        return cy.get(".shopping_cart_badge")
    }

}
export default ProductsPage;
