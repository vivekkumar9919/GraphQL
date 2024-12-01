
const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema')
const resolvers = require('./resolvers/index')
const productResolver = require('./resolvers/productResolver')

const app = express();
app.use(cors());

// Setup GraphQL endpoint
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true, 
  }));

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`GraphQL server running at http://localhost:${PORT}/graphql`);
});
