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



When(/^I add all the blue products to cart.$/, async () =>{
    
    await blueProductClass.addingBlueProductToCart();
    await sleep(10000);
    
})

When(/^I check that all added products are blue.$/, async () =>{
    
    await blueProductClass.checkingAllProductRBlue();
    await sleep(10000);
    
})


When(/^I delete the account.$/, async () =>{
    await signup.open();
   await login.accountDeletion();
   
//    browser.close();
})