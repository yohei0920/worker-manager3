import React from 'react';
import styles from './App.module.css';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Auth from './components/Auth'
import MainPage from './components/MainPage'

// Apollo Clientの初期化
const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
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
