import logo from './logo.svg';
import './App.css';
import NavBar from "../src/components/Nav.jsx"
import HomeView from "../src/view/Homepage.jsx"
import SearchBar from "../src/components/Search-Bar"
import FavList from "../src/components/Favourite-Cities"
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
              
              <BrowserRouter>
                <NavBar/>
                  <Switch>
                      <Route exact path="/Search" component={HomeView}/>
                    <Route exact path="/">
                      <Redirect to="/Search"/>
                    </Route>
                    <Route exact path="/Favourites" component={FavList}/>
                  </Switch>
              </BrowserRouter>
              

          </div>
      </Provider>
    </PersistGate>
  );
}

export default App;
