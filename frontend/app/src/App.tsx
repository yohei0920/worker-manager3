import React from 'react';
import styles from './App.module.css';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Auth from './components/Auth'
import MainPage from './components/MainPage'
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

// JWTトークンをリクエストのヘッダーに追加する関数
const authLink = setContext((_, { headers }) => {
  // JWTトークンを取得
  const token = localStorage.getItem('token');
  // ヘッダーにJWTトークンを追加
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

// Apollo Clientの初期化
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client} >
      <div className={styles.app}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/employees" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
