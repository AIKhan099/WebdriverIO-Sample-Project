import { $, browser } from '@wdio/globals'
import Page from './page.js';
// import {expect} from'chai';
import { expect } from 'chai';


let page = new Page()
/**
 * sub page containing specific selectors and methods for a specific page
 */
// class LoginPage extends Page {
    export class SignUp {
    /**
     * define selectors using getter methods
     */
    public check () {
        return $('//input[@data-qa="signup-name"]');
    }
    public get inputUsername () {
        return $('//input[@data-qa="signup-name"]');
    }

    public get inputEmail () {
        return $('//input[@data-qa="signup-email"]');
    }

    public get btnSubmit () {
        return $('//button[@data-qa="signup-button"]');
    }
    public get inputPassword(){
        return $('//input[@data-qa="password"]');
    }

    public get firstName(){
        return $(`//input[@data-qa="first_name"]`)
    }
    
    public get lastName(){
        return $(`//input[@data-qa="last_name"]`)
    }

    public get company(){
        return $(`//input[@data-qa="company"]`)
    }
    public get adress1(){
        return $(`//input[@data-qa="address"]`)
    }

    public get adress2(){
        return $(`//input[@data-qa="address2"]`)
    }

    public get state(){
        return $(`//input[@data-qa="state"]`)
    }

    public get city(){
        return $(`//input[@data-qa="city"]`)
    }

    public get zipCode(){
        return $(`//input[@data-qa="zipcode"]`)
    }

    public get mobileNumber(){
        return $(`//input[@data-qa="mobile_number"]`)
    }

    public get createAccountBtn(){
        // return $(`//button[@data-qa="create-account"]`)
        // return $('button=Create Account')
        return $(`//p[@class="required form-group"]/following-sibling::button`)
    }

    public get successTitle(){
        return $(`//h2[@class="title text-center"]`)
    }

    public get inputSubscribe(){
        return $(`#susbscribe_email`)
    }

    public async enteringDob(){
        
        const selectday = await $(`//select[@data-qa="days"]`);
        await selectday.selectByAttribute('value', '1');
        const selectmonth = await $(`//select[@data-qa="months"]`);
        await selectmonth.selectByAttribute('value', '1');
        const selectyear = await $(`//select[@data-qa="years"]`);
        await selectyear.selectByAttribute('value', '1996');
        
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, email:string , password: string) {
        await this.inputUsername.setValue(username);
        await this.inputEmail.setValue(email);
        await this.btnSubmit.click();
        await this.inputPassword.setValue(password);
        await this.enteringDob()
        // const selectBox = await $('#selectbox');
    }

    public async addressInformation(firstName:string, lastName:string, company:string, adress1:string, adress2:string, state:string, city:string, zipCode:string, mobileNumber:string){
        // browser.dismissAlert();
        await this.firstName.setValue(firstName);
        await this.lastName.setValue(lastName);
        await this.company.setValue(company);
        await this.adress1.setValue(adress1);
        await this.adress2.setValue(adress2);
        await this.state.setValue(state);
        await this.state.setValue(state);
        await this.city.setValue(city);
        await this.zipCode.setValue(zipCode);
        await this.inputSubscribe.setValue("dummy");
        await this.mobileNumber.setValue(mobileNumber);
        await this.createAccountBtn.click()
    }
    
    public async getTitle(){
        txt1:String ;
        // txt1 ="ss";
        // let txt_ = JSON.stringify(await this.successTitle.getText())
        let txt_1 = await this.successTitle.getText()
        let txt_ = txt_1.toString();
        console.log(txt_, typeof txt_, "_______________________________");
        expect(txt_).to.equal("ACCOUNT CREATED!");
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        // return super.open('login');
        // this.open('login');
        return page.open(`login`);
        // return super.open('login');
    }
    
}

// export default new LoginPage();

