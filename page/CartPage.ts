import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { CartLocators } from "../locators/CartLocators";

export class CartPage extends BasePage {

    private locator: CartLocators;

    constructor(page: Page) {

        super(page);

        this.locator =
            new CartLocators(page);
    }

    async checkout() {

        await this.action.click(
            this.locator.checkoutBtn()
        );
    }
}