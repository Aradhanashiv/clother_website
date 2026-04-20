import Product from "../models/productModel.js"

export const searchforProducts = async (req,res) => {
    try {
        const q = req.query.q
        if(!q){
          return res.status(404).json({success:false, message:"Please write query to research"});  
        }
        const search = await Product.find(
            {productName: {$regex: q, $options: "i"}}) 
        return res.status(200).json(search)    
    } catch (error) {
        
    }
}