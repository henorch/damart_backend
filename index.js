import { ApolloServer  } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone'
import mongoose from "mongoose";
const mongooseUrl = "mongodb+srv://henorch01:jhjasjhas@damart.3escttb.mongodb.net/?retryWrites=true&w=majority&appName=Damart"


        mongoose.connect(mongooseUrl).then(() => {
            console.log('database conected');
        }).catch((error) => console.log(error))

        const typeDefs = `#graphql

        enum CATEGORIES {
            KITCHEN _AND_CATERING
            CLOTHING_AND_WARE
            WINE_AND_LIQUORS
            ELECTRONIC_AND_GADGET
            COSTMESTICS_AND_BEAUTY
            OTHERS
            FURNITURE_AND_INTERIORS 
        } 
    
    
        type Products {
            productCode: String!
            name: String!
            price: Float!
            image: String!
            description: String!
            make: String!
            isDiscounted: Boolean!
            category: CATEGORIES
        }
        interface Users {
            firstname: String!
            id: ID!
            lastname: String!
            email: String!
        }
        type DeliveryInfo implements Users {
            firstname: String!
            id: ID!
            lastname: String!
            email: String!
            address: String!
            telephone: String!
            
        }
    
        type Query {
            products: [Products!]!
            findProducts(priceRange: Float): [Products!]!
        }
    `

    export const resolvers = {
        Query: { 
            products: () => products,
        }
    }


const server = new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    
    listen: { port: 3012}
    
})

console.log(`server running on slated port ${url}`);