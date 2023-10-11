import { Given, When, Then, AfterAll } from '@wdio/cucumber-framework';
import { browser,expect, $ } from '@wdio/globals'
// import LoginPage from '../pageobjects/login.page.js';
import  { SignUp }  from '../pageobjects/signup.page.js';
import SecurePage from '../pageobjects/secure.page.js';
import Page  from '../pageobjects/page.js';
import { Login } from '../pageobjects/login.page.js';
// import TestCaseHookDefinition from '../models/test_case_hook_definition'
let signup = new SignUp();
let page = new Page();
let login = new Login();
const sleep = (ms:number) => new Promise((resolve) => setTimeout(resolve, ms));



Given(/^I am on the (\w+) page$/, async (page) => {
    
    signup.open();
});

When(/^I signup with (\w+), (.+) and (.+).$/, async (username, email, password) => {
        
            await signup.login(username, email, password)
        
});

When(/^I enter address information (.+), (.+), (.+),(.+),(.+),(.+),(.+),(.+) and (.+).$/, async (firstName, lastName, company, adress1, adress2, state, city, zipcode, mobileNumber) => {
    
    await sleep(5000);
    await signup.addressInformation(firstName, lastName, company, adress1, adress2, state, city, zipcode, mobileNumber);
    await signup.getTitle();
    
    
});
