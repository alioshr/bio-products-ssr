import { createGlobalStyle } from "styled-components";
import React from 'react'
import {Provider} from 'react-redux'
import {useStore} from '../store/store'
import Layout from '../Components/HOC/Layout'

const GlobalStyle = createGlobalStyle`

@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap");

html, body, #root {
  height: 100%;
}

* {
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
}

body {
    margin: 0;
    font-family: 'Roboto Condensed',  serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

button {
    border: none;
}
`;

//this config enables global styles
function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  return (
    <Provider store={store}>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    <GlobalStyle />
    </Provider>
  );
}

export default App;
