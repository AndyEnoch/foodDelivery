import { ApolloServer, gql} from 'apollo-server';
import mongoose from 'mongoose';

import { MONGODB } from './config.js';
// import resolvers from './graphql/resolvers/index.js';
// import { typeDefs } from './graphql/typeDefs.js';

// const pubsub = new PubSub()

const typeDefs = gql`
    type Query {
        sayHi: String!
    }
`

const resolvers = {
    Query: {
        sayHi: () => 'Hello World'
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    // context: ({ req }) => ({ req, pubsub })
});

 
mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('MongoDb connected')
        return server.listen({ port: 5000});
    })
    .then((res) => {
        console.log(`Server running on ${res.url}`)
    }) 

// server.listen({ port: 5000 })
//     .then(res => {
//         console.log(`Server running on ${res.url}`)
//     })