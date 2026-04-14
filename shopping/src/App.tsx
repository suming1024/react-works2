import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './layouts/Header';
import Home from './layouts/Home';
import ProductsList from './products/ProductsList';
import ProductInfo from './products/ProductInfo';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;