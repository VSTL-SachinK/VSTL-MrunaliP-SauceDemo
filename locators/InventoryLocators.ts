import { Page } from "@playwright/test";

export class InventoryLocators {

    constructor(private page: Page) {}

    backpack =
        () => this.page.locator(
        '(//div[contains(@class,"inventory_item_name ")])[1]'
        //above locators is using xpath and it is locating the first product name on inventory page which is backpack
    );

    bikeLight =
        () => this.page.locator(
        "#add-to-cart-sauce-labs-bike-light"
        //above locator is using css selector and it is locating
        //  the add to cart button of bike light product on inventory page which is having id add-to-cart-sauce-labs-bike-light
    );

    cartIcon =
        () => this.page.locator(
        ".shopping_cart_link"
        //above locator is using css selector and it is locating the cart icon on 
        // inventory page which is class name shopping_cart_link
    );
}