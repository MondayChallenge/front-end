// import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'


const httpLink = createHttpLink({
  uri: 'http://localhost:1337/graphql'
})


<<<<<<< HEAD
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

export default client;
=======
export const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
});
>>>>>>>  rebase origin master
