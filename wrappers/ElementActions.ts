import { Locator } from "@playwright/test";

export class ElementActions {

    async click(locator: Locator): Promise<void> {
        await locator.waitFor({
            state: "visible"
        });

        await locator.click();
    }

    async fill(
        locator: Locator,
        value: string | number
    ): Promise<void> {

        await locator.waitFor({
            state: "visible"
        });

        await locator.fill(String (value));
    }

    async type(
        locator: Locator,
        value: string | number
    ): Promise<void> {

        await locator.waitFor({
            state: "visible"
        });

        await locator.type(String(value));
    }

    async getText(
        locator: Locator
    ): Promise<string> {

        return (
            await locator.textContent()
        ) || "";
    }

    async isVisible(
        locator: Locator
    ): Promise<boolean> {

        return await locator.isVisible();
    }

    async hover(
        locator: Locator
    ): Promise<void> {

        await locator.hover();
    }

    async doubleClick(
        locator: Locator
    ): Promise<void> {

        await locator.dblclick();
    }

    async scrollIntoView(
        locator: Locator
    ): Promise<void> {

        await locator.scrollIntoViewIfNeeded();
    }

    async uploadFile(
        locator: Locator,
        filePath: string
    ): Promise<void> {

        await locator.setInputFiles(filePath);
    }

    async selectByValue(
        locator: Locator,
        value: string
    ): Promise<void> {

        await locator.selectOption(value);
    }

    async check(
        locator: Locator
    ): Promise<void> {

        await locator.check();
    }

    async uncheck(
        locator: Locator
    ): Promise<void> {

        await locator.uncheck();
    }
}