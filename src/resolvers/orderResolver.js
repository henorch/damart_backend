import { Order } from '../models/orderschema'


const orderResolver = {
    Query: {
        orderById: async (_, {id}) => {
            return await Order.GetorderById(id)
        }
    }
}