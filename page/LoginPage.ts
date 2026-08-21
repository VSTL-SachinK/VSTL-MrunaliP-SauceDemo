import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { LoginLocators } from "../locators/LoginLocators";

export class LoginPage extends BasePage {

    private locator: LoginLocators;

    constructor(page: Page) {

        super(page);

        this.locator =
            new LoginLocators(page);
    }

    async login(
        username: string,
        password: string
    ) {

        await this.action.fill(
            this.locator.username(),
            username
        );

        await this.action.fill(
            this.locator.password(),
            password
        );

        await this.action.click(
            this.locator.loginBtn()
        );

         const appLogoLocator =this.page.locator('//div[contains(@class,"app_logo")]');
         await this.assertion.verifyText(
            appLogoLocator,
            "Swag Labs"
        );
       
        

       
    }
}