


import{test,expect,page, chromium} from '@playwright/test'



test("Launch the url",async ({})=>{

    //await page.goto("")

    // const browser= await chromium.launch({headless:false})
    // const context=await browser.newContext()
    // const page=await context.newPage()
    await page.goto("https://www.saucedemo.com/")

    await page.getByPlaceholder("Username").fill("standard_user")
    await page.getByPlaceholder("Password").fill("secret_sauce")
    await page.locator("#login-button").click({timeout:5000})

    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
    
})


test.skip("Negative scenario",async ()=>{

    //await page.goto("")

    const browser= await chromium.launch({headless:false})
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto("https://www.saucedemo.com/")

    await page.getByPlaceholder("Username").fill("standard_user")
    await page.getByPlaceholder("Password").fill("secret")

   //await page.waitForSelector("//div[@class='error-message-container error']")
    await expect(page.locator("//div[@class='error-message-container error']")).toContainText("Epic sadface: Username and password")
  
})

