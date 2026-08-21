import { Page } from "@playwright/test";

export class CheckoutLocators {

    constructor(private page: Page) {}

    firstName =
        () => this.page.locator("#first-name");

    lastName =
        () => this.page.locator("#last-name");

    postalCode =
        () => this.page.locator("#postal-code");

    continueBtn =
        () => this.page.locator("#continue");

    finishBtn =
        () => this.page.locator("#finish");

    successMsg =
        () => this.page.locator(".complete-header");
}