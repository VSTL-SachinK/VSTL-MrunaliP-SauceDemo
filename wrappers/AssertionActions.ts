import { expect, Locator } from "@playwright/test";

export class AssertionActions {

    async verifyVisible(locator: Locator) {
        await expect(locator).toBeVisible();
    }

    async verifyText(
        locator: Locator,
        expectedText: string
    ) {
        await expect(locator)
            .toContainText(expectedText);
    }
}