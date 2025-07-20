import {test,expect,page} from '@playwright/test'


import { Loginpage } from '../pages/LoginPage'


test("Valid Login",async ({page}) =>{



    const login=new Loginpage(page)
    await login.laucnURl("https://rahulshettyacademy.com/client")
    await login.validLogin("venkatselenium2643@gmail.com","Venkat@9538")

    
})


test("inValid Login",async ({page}) =>{



    const login=new Loginpage(page)
    await login.laucnURl("https://rahulshettyacademy.com/client")
    await login.validLogin("venkatselenium2643@gmail.com","Venkat")
    await expect(login.errorMsg).toContainText("Incorrect")

    
})