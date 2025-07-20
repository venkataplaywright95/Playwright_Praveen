
import { test, expect, page, locator } from '@playwright/test'
export class Loginpage {


    constructor(page) {

        this.page = page

        this.username = page.locator("#userEmail")
        this.password = page.locator("#userPassword")
        this.loginButton = page.locator("//input[@value='Login']")
        this.errorMsg=page.locator("#toast-container")
    }

    async laucnURl(url) {

        await this.page.goto(url)

    }

    async validLogin(usename, password) {

        await this.username.fill(usename)
        await this.password.fill(password)
        await this.loginButton.click()
    }

      async invalidUalidLogin(usename, invalidpassword) {

        await this.username.fill(usename)
        await this.password.fill(invalidpassword)
        await this.loginButton.click()
    }
}