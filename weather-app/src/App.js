import logo from './logo.svg';
import './App.css';
import NavBar from "../src/components/Nav.jsx"
import HomeView from "../src/view/Homepage.jsx"
import SearchBar from "../src/components/Search-Bar"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import configureStore from '../src/redux/store/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from '../src/redux/store/store.js'
import env from "dotenv"

function App() {
  return (
    <PersistGate persistor={persistor} loading={null}>
      <Provider store={configureStore}>
          <div className="App">
              <NavBar/>
              <HomeView/>

          </div>
      </Provider>
    </PersistGate>
  );
}

export default App;
