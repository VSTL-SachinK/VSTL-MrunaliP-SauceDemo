import { Page } from "@playwright/test";

export class LoginLocators {

    constructor(private page: Page) {}

    username = () =>
        //this.page.locator('//input[contains(@id,"user-name")]');
   // this.page.getByTestId('username');
   this.page.getByPlaceholder('Username'); //above is the playwright built-in locator for the username field, which is more reliable and easier to read than the xpath locator.
    //above is the playwright built-in locator for the username field, which is more reliable and easier to read than the xpath locator.

    password = () =>
        this.page.locator('//input[contains(@id,"password")]');

    loginBtn = () =>
        this.page.locator('//input[contains(@id,"login-button")]');
}