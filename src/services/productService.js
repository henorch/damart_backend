import { Products } from '../models/productsschema'


const productService = {

    getAllProduct: async () => {
        try {
            const products = await Products.find({})
            return products
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    searchProuctbyString: async (contain) => {
        try {
            const searchProducts = await Products.find({contain})
            return searchProducts
        } catch (error) {
            console.error(`product you are search for is currently unavailable`);
            throw error;
        }
        
    }    
        
} 


module.exports = productService