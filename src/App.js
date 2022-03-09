import './App.css';
import { NavBar } from './components/navBar/navBar';
import { Footer } from './components/footer/footer';
import { ItemListContainer } from './components/itemListContainer/itemListContainer';
import { ItemDetailsContainer } from './components/itemDetailsContainer/itemDetailsContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/home/home';
import { CartProvider } from './context/cartContext';
import { CartContainer } from './components/cartContainer/cartContainer';
import { UserForm } from './components/userForm/userFom'
import { OrderResumeContainer } from './components/orderResumeContainer/orderResumeContainer';



export const App = () => {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />}>

          </Route>
          <Route exact path="/home" element={<ItemListContainer />}>

          </Route>
          <Route exact path="/ItemListContainer" element={<ItemListContainer />}>

          </Route>
          <Route path="/ItemListContainer/:categoryKey" element={<ItemListContainer />}>

          </Route>
          <Route path="/ItemDetailsContainer/:productId" element={<ItemListContainer />}>

          </Route>
          <Route path="/cartContainer/" element={<CartContainer />}>

          </Route>
          <Route path="/orderResumeContainer/:orderId" element={<OrderResumeContainer />}>

          </Route>
          <Route path="/userForm/" element={<UserForm />}>

          </Route>
          <Route path="/*" element={<Home />}>

          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>

  );
}