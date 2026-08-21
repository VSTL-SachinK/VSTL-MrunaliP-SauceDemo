
/// <reference types="node" />

import * as path from "path";
import * as XLSX from "xlsx";
import loginData from "../testData/login/loginData.json";
import { test } from "../fixtures/baseFixture";

function getCheckoutData(): { firstName: string; lastName: string; postalCode: string } {
    const excelPath = path.resolve(process.cwd(), "testData/checkout/checkout.xlsx");
    const workbook = XLSX.readFile(excelPath);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(sheet)[0] as { firstName?: string | number; lastName?: string | number; postalCode?: string | number };

    return {
        firstName: String(data.firstName ?? ""),
        lastName: String(data.lastName ?? ""),
        postalCode: String(data.postalCode ?? "")
    };
}

test("Complete Purchase Flow", async ({ page, loginPage, inventoryPage, cartPage, checkoutPage }) => {
    const checkoutInfo = getCheckoutData();

    await page.goto("https://www.saucedemo.com");

    await loginPage.login(loginData.username, loginData.password);

    await inventoryPage.addProducts();

    
    await inventoryPage.openCart();

    await cartPage.checkout();

    await checkoutPage.enterCheckoutInfo(
        checkoutInfo.firstName,
        checkoutInfo.lastName,
        checkoutInfo.postalCode
    );

    await checkoutPage.finishOrder();

    await checkoutPage.verifyOrderSuccess();
});