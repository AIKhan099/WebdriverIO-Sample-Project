import {$, browser } from '@wdio/globals';
// import Page from './page';
// let page = new Page();
// import { SignUp } from './signup.page';
// let signup = new SignUp();


export class Login{

    public get inputEmail(){
        return $(`//input[@data-qa="login-email"]`)
    }

    public get inputPassword(){
        return $(`//input[@data-qa="login-password"]`)
    }

    public get submit(){
        return $(`//button[@data-qa="login-button"]`)
    }
    public get accDelBtn(){
        return $(`(//ul[@class="nav navbar-nav"]/li)[5]/a`)
    }
    public get logoutBtn(){
        return $(`(//ul[@class="nav navbar-nav"]/li)[4]/a`)
    }

    public async login(email:string, password:string){
        // await signup.open();
        await this.inputEmail.waitForExist();
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.submit.click();
        
        
    }
    public async logout(){
        await this.logoutBtn.click();
    }
    public async accountDeletion(){
        // await signup.open();
        await this.accDelBtn.click();
    }
    

}