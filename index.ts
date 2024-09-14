import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone'

// data
import db from './_db.js'
import { typeDefs } from "./schema.js";

const resolvers = {

}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 8000 }
})

console.log(`Server ready at: ${url}`)