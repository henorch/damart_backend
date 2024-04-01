import { productService } from '../services/productService'




const productResolver = {
    Query:{
        product: async () => {
            return await productService.getAllProducts
        },
        searchProuctbyString: async (_, {contain}) => {
            return await productService.searchProuctbyString(contain)
        },
        searchProductbyPrice: async (_, {price}) => {
            return await productService.searchProductbyPrice(price)
        }
    }
}

module.exports = productResolver;