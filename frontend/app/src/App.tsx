import styles from './App.module.css';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import MainPage from './components/MainPage'
import StateContextProvider from './context/StateContext';

// Apollo Clientの初期化
const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <StateContextProvider>
        <div className={styles.app}>
          <BrowserRouter>
            <Routes>
              <Route path="/employees" element={<MainPage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </StateContextProvider>
    </ApolloProvider>
  );
}

export default App;
