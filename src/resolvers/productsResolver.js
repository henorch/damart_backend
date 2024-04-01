import { productService } from '../services/productService'

export const productResolver = {
    Query:{
        product: async () => {
            return await productService.getAllProducts
        },
        searchProuctbyString: (_, {contain}) => products,
        searchProductbyPrice: (_, {price}) => products 
    }
}