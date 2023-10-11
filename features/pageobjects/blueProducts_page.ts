// import blueProduct from '../../data_driven/blueProduct.json' assert { type: "json" };
import { $$, $, browser } from "@wdio/globals";
import { expect } from 'chai';
import blueProduct from "../../data_driven/blueProduct.json"  assert { type: "json" };

export class BlueProduct{

    public ProductXpath(name_) {
        
        let path =  `(//div[@class="productinfo text-center"]/p[contains(text(), "${name_}")])[1]`;
        return $(path);
    }

    public AddToCard(name_){
        return $(`(//div[@class="productinfo text-center"]/p[contains(text(), "${name_}")])[1]//parent::div/a`);
    }

    public get inputSubscribe(){
        return $(`#susbscribe_email`)
    }
    public get P1(){
        
         return $(`(//div[@class="productinfo text-center"]/a[@data-product-id="1"])[1]`);
        
    }

    public get contShopBtn(){
        // return $(`//button[@class="btn btn-success close-modal btn-block"]`)
        return $(`(//button[normalize-space()='Continue Shopping'])[1]`)
    }

    public get cartBtn(){
        return $(`(//div[@class="shop-menu pull-right"]/ul/li/a)[3]`)
    }

    public get allCartPrdt(){
        return $$(`//table[@id="cart_info_table"]/tbody/tr/td/h4`)
    }

    public eachProductName(i){
        return $(`(//table[@id="cart_info_table"]/tbody/tr/td/h4)[${i}]`)
    }


    public async addingBlueProductToCart(){
        const sleep = (ms:number) => new Promise((resolve) => setTimeout(resolve, ms));
        console.log( "__________________----------------0")
        
        // finding blue product by its own and then adding to cart.
        // if (true ){
        //     //  let t = await $(`//div[@class="single-widget"]/h2`).getText();
        //     // let  val = this.AddToCard(blueProduct.p1.name).getAttribute("data-product-id");
        //      console.log("__________________---------------- hhhhhhhhhhh");
        //     // const cc = await $$(`/html/body/section[2]/div/div/div[2]/div[1]/div/div/div/div/p`).length
        //     const cc = await $$(`//div[@class="features_items"]/div[@class="col-sm-4"]`).length
        //     console.log("__________________---------------- hhhhhhhhhhh", cc);
        //     for(let i=1; i<=cc ; i++){
        //         let txt = await $(`(//div[@class="features_items"]/div[@class="col-sm-4"]/div/div/div/p)[${i}]`).getText();
        //         console.log(txt)
        //         if (txt.toLowerCase().includes("blue")){
        //             await this.inputSubscribe.setValue("dummy");
        //             await $(`(//div[@class="features_items"]/div[@class="col-sm-4"]/div/div/div/a)[${i}]`).click();
        //             await sleep(5000);
        //             await this.contShopBtn.click();
        //             console.log("Clicked on ", txt,"\n______________________\n");
        //         }
        //     }

            
        // }
        const all_blue_products = Object.keys(blueProduct);
        for (let i=0; i < Object.keys(blueProduct).length; i++){
            await this.inputSubscribe.setValue("dummy");
            await $(blueProduct[all_blue_products[i]]).click();
            //console.log("___________________________", blueProduct[all_blue_products[i]]," ", blueProduct["Blue Top"]);
            await sleep(5000);
            await this.contShopBtn.click();
            
        }
            
    }

    public async checkingAllProductRBlue(){
        const sleep = (ms:number) => new Promise((resolve) => setTimeout(resolve, ms));
        await sleep(2000);
        await this.cartBtn.click();
        let all_products = await this.allCartPrdt.length;
        console.log("_______________--total products in cart", all_products);
        for (let i=1; i<= all_products; i++){
            let product_name = await this.eachProductName(i).getText();
            console.log("#########################",product_name," ",);
            expect(product_name.toLowerCase()).includes("blue");
        }
    }

    

}

