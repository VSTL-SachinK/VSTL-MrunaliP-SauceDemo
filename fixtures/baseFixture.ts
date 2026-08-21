import { test as base } from "@playwright/test";

import { LoginPage } from "../page/LoginPage";
import { InventoryPage } from "../page/InventoryPage";
import { CartPage } from "../page/CartPage";
import { CheckoutPage } from "../page/CheckoutPage";



type MyFixtures = {

    loginPage: LoginPage;
    inventoryPage:InventoryPage;
    cartPage:CartPage;
    checkoutPage:CheckoutPage;

   
};

export const test =
    base.extend<MyFixtures>({

    loginPage: async (
        { page },
        use
    ) => {
        await use(
            new LoginPage(page)
        );
    },

    inventoryPage:async(
        {page},
        use
    )=>{
        await use(new InventoryPage(page))
    },
    cartPage:async(
        {page},
        use
    )=>{
        await use(new CartPage(page))
    }
,
    checkoutPage: async(
        { page },
        use
    ) => {
        await use(new CheckoutPage(page));
    }
    


});

