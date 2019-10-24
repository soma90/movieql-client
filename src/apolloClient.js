import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  //url: "https://movieql-osezlvyqsg.now.sh/"
  uri: "https://movieql.now.sh/"
});

export default client;