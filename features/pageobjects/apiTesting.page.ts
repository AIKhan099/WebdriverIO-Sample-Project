import { browser, $ } from '@wdio/globals'
import Page  from '../pageobjects/page.js';
import supertest from 'supertest';
const request = new supertest('https://automationexercise.com');
import  { expect } from 'chai';


export default class apiTesting {
    public async get_(){
    const request = await new supertest('https://automationexercise.com');
    const res = await request.get('/api/productsList');
    await  console.log("______________________________________________",res.status)
    await console.log("______________________________________________",res.text[5], typeof res.text)
    const res2 = await JSON.parse(res.text)
    await console.log("______________________________________________",res2.products[0].name, res2.products[0].price, typeof res2)
    let name_ = await res2.products[0].name
    name_ = await name_.toString()
    await console.log("______________________________________________",name_, typeof name_)
    await expect(name_).to.equal('Blue Top')
    }

    public async post_(){
        const request = await new supertest('https://automationexercise.com');
        const res = await request.post('/api/searchProduct').send('search_product=jean' );
        await console.log("########################", res.text, res.statusCode);
        const res1 = await JSON.parse(res.text);
        await console.log(res1.products[0]);
        let name = await res1.products[0].name.toString();
        await console.log(name, typeof name, name.includes('Jean'));
        await expect(name.includes('Jean')).to.equal(true);
    
    }
}