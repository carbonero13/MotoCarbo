import './App.css';
import { NavBar } from './components/navBar/navBar';
import { Footer } from './components/footer/footer';
import { ItemListContainer } from './components/itemListContainer/itemListContainer';
import { ItemDetailsContainer } from './components/itemDetailsContainer/itemDetailsContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/home/home';
import { CartProvider } from './context/cartContext';
import { CartContainer } from './components/cartContainer/cartContainer';
import { OrderResumeContainer } from './components/orderResumeContainer/orderResumeContainer';
import { PageNotFound } from './components/pageNotFound/pageNotFound';
import { OrderResumeSearch } from './components/orderResumeSearch/orderResumeSearch';
import { ContactUs } from './components/contactUs/contactUs';



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
          <Route path="/contactUs/" element={<ContactUs />}/>
          <Route path="/*" element={<PageNotFound />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>

  );
}