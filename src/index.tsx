import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import "bootstrap/dist/css/bootstrap.min.css";

import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql, HttpLink} from "@apollo/client";

//import getExchangeRates from "./components/gql/getExchangeRates.graphql";

//https://48p1r2roz4.sse.codesandbox.io
//http://127.0.0.1:8000/graphql
const client = new ApolloClient({
  uri: "http://127.0.0.1:8000/graphql",
  cache: new InMemoryCache(),
})


// client.query({
//   query: gql`
//     query GetRates{
//       rates(currency: "USD"){
//         currency
//       }
//     }
//   `
// }).then(result => console.log(result));



// const EXCHANGE_RATES = gql`
//     query GetExchangeRates {
//     rates(currency: "USD") {
//       currency
//       rate
//     }
//   }
// `;
// function ExchangeRates() {
//   const { loading, error, data } = useQuery(EXCHANGE_RATES);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;

//   return data.rates.map(({ currency, rate }: any) => (
//     <div key={currency}>
//       <p>
//         {currency}: {rate}
//       </p>
//     </div>
//   ));
// }

const GET_ALL_PRODUCTS = gql`
  query{
    allProducts{
      id
      name
      price
    }
  }
`;
const ProductsTable = () => {
  const { loading, error, data} = useQuery(GET_ALL_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);
  return (
    <div>
      <span>hello world</span>
    </div>
  );
};





ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <ProductsTable />
      {/* <ExchangeRates /> */}
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
