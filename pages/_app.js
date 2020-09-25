import { createGlobalStyle } from "styled-components";
import React from 'react'
import {Provider} from 'react-redux'
import {useStore} from '../store/store'
import Layout from '../Components/HOC/Layout'

const GlobalStyle = createGlobalStyle`

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
