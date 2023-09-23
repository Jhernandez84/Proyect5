const mongoose= require('mongoose')

const Product=mongoose.model('Product')

const newProduct = async (req,res)=>{
    const{productName,sku,category, stock, image, desc, valorUnidad}=req.body

    try {
        const product = new Product({
            productName,
            sku,
            category,
            stock,
            image,
            desc,
            valorUnidad
        })
        const savedProduct= await product.save()
        return res.status(201).json({
            message: 'Great, new product created',
            product: savedProduct,
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error',
            detail: error,
        })
    }
}

const getProducts= async(req,res)=>{
    try {
        const resp=await Product.find()
        return res.status(200).json({
            message:'Found following',
            detail:resp,
        })
    } catch (error) {
         return res.status(500).json({
            message: 'Internal Server Error',
            detail: error,
         })
    }
}

const getProductById= async (req,res)=>{
    const{_id}=req.params
    console.log(_id)
    try {
        const resp=await Product.findById(_id)
        return res.status(200).json({
            message:"Detalle del producto",
            detail:resp,
        })
    } catch (error) {
        return res.status(500).json({
            message:"Internal Server Error",
            detail:error,
        })
    }
}

const updateProduct=async (req,res)=>{
    const{_id,ProductUpdated}=req.body
    console.log(_id,ProductUpdated)
    try {
        const resp=await Product.findByIdAndUpdate(_id,ProductUpdated, {new:true})
        return res.status(200).json({
            message:"ok",
            detail:resp,
        })
    } catch (error) {
        return res.status(500).json({
            message:"Internal Server Error",
            detail:error,
        })
    }
}

const deleteProduct=async (req,res)=>{
    const{_id}=req.body
    console.log(_id)
    try {
        const resp=await Product.findByIdAndDelete(_id)
        return res.status(200).json({
            message: `Product with ID ${_id} was deleted successfully`,
            detail:resp,
        })
    } catch (error) {
        return res.status(500).json({
            message:"Internal Server Error",
            detail:error,
        })
    }
}

module.exports={
    newProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
}