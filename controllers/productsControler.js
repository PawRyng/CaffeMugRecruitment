const ProductsService = require("../services/productsService")

const validationData = (Name, Price)=>{
    if(Name === undefined || Price === undefined || typeof(Name) !== "string" || typeof(Price) !== "number"){
        return false
    }
    else{
        return true
    }
}


module.exports = {
    get: async (req, res) =>{
        const products = await ProductsService.getAllProducts()
        res.json(products)
    },

    getDetails: async (req,res) =>{
        try{
            const productID = req.params.id;
            const productDetails = await ProductsService.getDetailsProduct(productID)
            res.json(productDetails !== null ? productDetails : "Product with this ID not exist")
        }
        catch (err){
            res.status(500).json({error:err})
        }
    },

    //put controler
    put: async (req, res)=>{
        try{
            const idProducts = req.params.id;
            const {Name, Price} = req.body;
            const isExist = await ProductsService.getDetailsProduct(idProducts)
            if(isExist !== null ){
                if(typeof(Name) === "string" || typeof(Price) === "number"){
                    ProductsService.editProduct(idProducts,Name,Price)
                    res.status(200).json({status: "OK"})
                }
                else{
                    res.status(500).json({status: "Invalid data"})
                }
            }
            else{
                res.status(500).json({status: "Bad id"})
            }
        }
        catch (err){
            res.status(500).json({error: err})
        }
    },


    putError: async (req, res)=>{
        res.json("Add id to link, explane: http://localhost:4000/:id")
    },

//delete controller
    delete: async (req, res)=>{
        try{
            const isExist = await ProductsService.getDetailsProduct(req.params.id)
            if(isExist !== null){
                ProductsService.deleteProduct(req.params.id)
                res.json({status: "OK"})
            }
            else{
                res.json({status: "Bad id"}) 
            }
        }
        catch (err){
            res.status(500).json({error: err})
        }
    },
    deleteError: async (req, res)=>{
        res.json("Add id to link, explane: http://localhost:4000/:id")
    },

    //post controller
    post: async (req, res) =>{
        try{
            const {Name, Price} = req.body

            validationData(Name, Price) ? res.json(await ProductsService.addProduct(req.body)) :res.status(500).json({error: "Invalid data"})
        }
        catch (err){
            res.status(500).json({error: err})
        }
    }
}