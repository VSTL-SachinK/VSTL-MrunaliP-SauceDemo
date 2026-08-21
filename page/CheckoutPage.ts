import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { CheckoutLocators } from "../locators/CheckoutLocators";

export class CheckoutPage extends BasePage {

    private locator: CheckoutLocators;

    constructor(page: Page) {

        super(page);

        this.locator =
            new CheckoutLocators(page);
    }

    async enterCheckoutInfo(
        firstName: string,
        lastName: string,
        postalCode: string
    ) {

        await this.action.fill(
            this.locator.firstName(),
            firstName
        );

        await this.action.fill(
            this.locator.lastName(),
            lastName
        );

        await this.action.fill(
            this.locator.postalCode(),
            postalCode
        );

        await this.action.click(
            this.locator.continueBtn()
        );
    }

    async finishOrder() {

        await this.action.click(
            this.locator.finishBtn()
        );
    }

    async verifyOrderSuccess() {

        await this.assertion.verifyText(
            this.locator.successMsg(),
            "Thank you for your order!"
        );
    }
}