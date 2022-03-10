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
import { PageNotFound } from './components/pagenotfound/pagenotfound';
import { OrderResumeSearch } from './components/orderResumeSearch/orderResumeSearch';



export const App = () => {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/home" element={<Home />}/>
          <Route exact path="/ItemListContainer" element={<ItemListContainer />}/>
          <Route path="/ItemListContainer/:categoryKey" element={<ItemListContainer />}/>
          <Route path="/ItemDetailsContainer/:productId" element={<ItemDetailsContainer />}/>
          <Route path="/cartContainer/" element={<CartContainer />}/>
          <Route path="/orderResumeContainer/:orderId" element={<OrderResumeContainer />}/>
          <Route path="/orderResumeSearch/" element={<OrderResumeSearch />}/>
          <Route path="/userForm/" element={<UserForm />}/>
          <Route path="/*" element={<PageNotFound />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>

  );
}