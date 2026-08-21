
import { test } from "@playwright/test";
test("test",async({page})=>{
     page.goto("https://www.google.com/?zx=1782541152");
     
    
    const search=page.locator("textarea#APjFqb.gLFyf");
    await search.fill("javascript is what?");
    await search.press("Enter");



     

})