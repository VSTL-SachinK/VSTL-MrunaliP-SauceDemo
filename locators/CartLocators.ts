import { Page } from "@playwright/test";

export class CartLocators {

    constructor(private page: Page) {}

    checkoutBtn =
        () => this.page.locator('//button[contains(@id,"checkout")]');
}