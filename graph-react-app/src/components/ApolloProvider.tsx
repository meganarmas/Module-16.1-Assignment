import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

type ApolloProviderProps = {
    children: React.ReactNode;
}

const albumApi = 'https://graphqlzero.almansi.me/api'

const client = new ApolloClient({
    uri: albumApi,
    cache: new InMemoryCache(),
});

const MyApolloProvider: React.FC<ApolloProviderProps> = ({ children }) => {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}

export default MyApolloProvider