import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { InventoryLocators } from "../locators/InventoryLocators";

export class InventoryPage extends BasePage {

    private locator: InventoryLocators;

    constructor(page: Page) {

        super(page);

        this.locator =
            new InventoryLocators(page);
    }

    async addProducts() {

        await this.action.click(
            this.locator.backpack()
        );

        
    }

    async openCart() {

        await this.action.click(
            this.locator.cartIcon()
        );
    }
}