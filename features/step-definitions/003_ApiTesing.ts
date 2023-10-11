import { Given, When, Then, AfterAll } from '@wdio/cucumber-framework';
import { browser, $ } from '@wdio/globals'
import Page  from '../pageobjects/page.js';
import  apiTesting    from '../pageobjects/apiTesting.page.js';
import supertest from 'supertest';
const request = new supertest('https://automationexercise.com');
import  { expect } from 'chai';

let apiTesing = new apiTesting();


Given(/^I send the GET request at url.$/, async () => {
    await apiTesing.get_();
    
})
Given(/^I send the post request and validate it.$/, async () => {
    await apiTesing.post_();
})



