import { Given, When, Then, AfterAll } from '@wdio/cucumber-framework';
import { browser,expect, $ } from '@wdio/globals'
// import LoginPage from '../pageobjects/login.page.js';
import  { SignUp }  from '../pageobjects/signup.page.js';
import SecurePage from '../pageobjects/secure.page.js';
import Page  from '../pageobjects/page.js';
import { Login } from '../pageobjects/login.page.js';
// import TestCaseHookDefinition from '../models/test_case_hook_definition'
 import { BlueProduct } from '../pageobjects/blueProducts_page.js';

 let blueProductClass = new BlueProduct()
let signup = new SignUp();
let page = new Page();
let login = new Login();
const sleep = (ms:number) => new Promise((resolve) => setTimeout(resolve, ms));

When(/^I login with (.+) and (.+).$/, async (email:string, password:string) => {
    
    await signup.open();
    // await sleep(5000);
    await login.logout();
    await sleep(3000);
    await login.login(email, password);
    // await blueProductClass.addingBlueProductToCart();
    // await sleep(10000);
    
})

// When(/^I delete the account.$/, async () =>{
//     // await signup.open();
//    await login.accountDeletion();
   
// //    browser.close();
// })