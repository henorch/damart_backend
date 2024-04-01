import { Order } from '../models/orderschema'

const orderService = {
     GetorderById:  async (id) => {
        try {
            const order = await Order.findById(id)
            return order
        } catch (error) {
            console.error(`This product does not exist `);
            throw error;
        }
       
    },

    GetAllOrder: async () => {
        try {
            const allorder = await Order.find({})
            return allorder 
        } catch (error) {
            console.error(`No other is currently available`);
            throw error
        }
    },

    
}
