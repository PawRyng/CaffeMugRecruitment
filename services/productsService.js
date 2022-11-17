const e = require("express")
const { findByIdAndDelete } = require("../models/products")
const Products = require("../models/products")

module.exports = class ProductsService{
    static async getAllProducts(){
        try{
            // const allProducts = await Products.find().select("Name -_id")
            const allProducts = await Products.find().select("Name")
            return allProducts
        }
        catch{
            console.log("Error")
        }
    }

    static async getDetailsProduct(id){
        const details = await Products.findById(id);
        return details
    }

    static async deleteProduct(id){
        const deleteProductItem = Products.findByIdAndDelete(id)
        return deleteProductItem
    }


    static async editProduct(id, Name, Price){
        const edit = Products.findByIdAndUpdate(id,{Name, Price, UpdateDate: Date.now()})
        return edit
    }

    
    static async addProduct(data){
        try{
            const newProduct = {
                Name: data.Name,
                Price: data.Price
            }
            const isExist = await Products.findOne({Name: newProduct.Name})
            if(isExist ===  null){
                const query = await new Products(newProduct).save()
                return query
            }
            else{
                return "Product exist!"
            }
        }
        catch (err) {
            return err._message
        }
    }



}