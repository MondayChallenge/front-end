// import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'


const httpLink = createHttpLink({
  uri: 'http://localhost:1337/graphql'
})


const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

export default client;