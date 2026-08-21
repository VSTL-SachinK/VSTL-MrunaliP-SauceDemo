import { Page } from "@playwright/test";
import { ElementActions } from "../wrappers/ElementActions";
import { AssertionActions } from '../wrappers/AssertionActions';

export class BasePage {

    protected page: Page;
    protected action: ElementActions;
    protected assertion: AssertionActions;

    constructor(page: Page) {

        this.page = page;

        this.action = new ElementActions();

        this.assertion =
            new AssertionActions();
    }
}