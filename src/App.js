import './App.css';
import { NavBar } from './components/navBar/navBar';
import { Footer } from './components/footer/footer';
import { ItemListContainer } from './components/itemListContainer/itemListContainer';
import { ItemDetailsContainer } from './components/itemDetailsContainer/itemDetailsContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './components/home/home';
import { CartProvider } from './context/cartContext';
import { CartContainer } from './components/cartContainer/cartContainer';
import {UserForm} from './components/userForm/userFom'
import { OrderResumeContainer } from './components/orderResumeContainer/orderResumeContainer';



export const App = () => {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
          <ItemListContainer />
          </Route>
          <Route exact path="/home">
          <ItemListContainer />
          </Route>
          <Route exact path="/ItemListContainer">
            <ItemListContainer />
          </Route>
          <Route path="/ItemListContainer/:categoryKey">
            <ItemListContainer />
          </Route>
          <Route path="/ItemDetailsContainer/:productId">
            <ItemDetailsContainer />
          </Route>
          <Route path="/cartContainer/">
            <CartContainer />
          </Route>
         <Route path="/orderResumeContainer/:orderId">
            <OrderResumeContainer />
          </Route> 
          <Route path="/userForm/">
            <UserForm />
          </Route>
          <Route path="/*">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </CartProvider>

  );
}