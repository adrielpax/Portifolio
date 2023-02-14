import {ApolloClient,InMemoryCache,createHttpLink} from '@apollo/client';

const httplink = createHttpLink({
    uri:'https://4000-t4spax-portifolio-amc4cq2x2dx.ws-us86.gitpod.io/'
})

const client = new ApolloClient({
    uri:httplink,
    cache: new InMemoryCache()
});

export default client;