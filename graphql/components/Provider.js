"use client";
import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://192.168.1.22:3002",
  cache: new InMemoryCache(),
});
function Provider({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default Provider;
