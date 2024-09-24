import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import LayoutEn from './pages/en/LayoutEn';
import HomePageEn from './pages/en/HomePageEn';
import ShopsEn from './pages/en/ShopsEn';
import FranchiseEn from './pages/en/FranchiseEn';
import BlogEn from './pages/en/BlogEn';
import ContactsEn from './pages/en/ContactsEn';
import BlogPageEn from './pages/en/BlogPageEn';
import StandardMenu from './pages/en/StandardMenu';
import StandardProductPage from './pages/en/StandardProdutPage';
import ProductPageEn from './pages/en/ProductPageEn';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    const fetchData = async () =>{
        const response = await axios.get('https://pizza-ar-8ac68-default-rtdb.firebaseio.com/.json');
        console.log(response.data)
    }

    fetchData();
  },[])
  
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Navigate to="/en" />} />
        <Route path="/en" element={<LayoutEn />}>
          <Route index element={<HomePageEn />} />
          <Route path="menu">
            <Route index element={<Navigate to="standard-menu" />} />
            <Route path="standard-menu" element={<StandardMenu />}>
              <Route index element={<Navigate to="vareniki" />} />
              <Route path=":product" element={<StandardProductPage />} />
            </Route>
          </Route>
          <Route path="product"
          >
            <Route path=":product" element={<ProductPageEn />} />
          </Route>
          <Route path="franchise" element={<FranchiseEn />} />
          <Route path="blog" >
            <Route index element={<BlogEn />} />
            <Route path=":blog" element={<BlogPageEn />} />
          </Route >
          <Route path="shops" element={<ShopsEn />} />
          <Route path="contacts" element={<ContactsEn />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
