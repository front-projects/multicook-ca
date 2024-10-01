import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import LayoutEn from './pages/en/LayoutEn';
import HomePageEn from './pages/en/HomePageEn';
import ShopsEn from './pages/en/ShopsEn';
import ContactsEn from './pages/en/ContactsEn';
import StandardMenu from './pages/en/MenuEn';
import StandardProductPage from './pages/en/MenuListEn';
import ProductPageEn from './pages/en/ProductPageEn';
import axios from 'axios';
import { useEffect } from 'react';
import LayoutUa from './pages/ua/LayoutUa';
import HomePageUa from './pages/ua/HomePageUa';
import ShopsUa from './pages/ua/ShopsUa';
import StandardMenuUa from './pages/ua/MenuUa';
import StandardProductPageUa from './pages/ua/MenuListUa';
import ProductPageUa from './pages/ua/ProductPageUa';
import ContactsUa from './pages/ua/ContactsUa';

function App() {
  useEffect(()=>{
    const fetchData = async () =>{
        const response = await axios.get('https://pizza-ar-8ac68-default-rtdb.firebaseio.com/.json');
    }

    fetchData();
  },[])

  const lang = localStorage.getItem('lang');
  
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Navigate to={`${lang ? "/" + lang : "/en"}`} />} />
        <Route path="/en" element={<LayoutEn />}>
          <Route index element={<HomePageEn />} />
          <Route path="menu" element={<StandardMenu/>}>
              <Route index element={<Navigate to="pierogy" />} />
              <Route path=":product" element={<StandardProductPage />} />
          </Route>
          <Route path="product"
          >
            <Route path=":product" element={<ProductPageEn />} />
          </Route>
      
          <Route path="shops" element={<ShopsEn />} />
          <Route path="contacts" element={<ContactsEn />} />
        </Route>
        <Route path="/ua" element={<LayoutUa />}>
          <Route index element={<HomePageUa />} />
          <Route path="menu" element={<StandardMenuUa/>}>
              <Route index element={<Navigate to="pierogy" />} />
              <Route path=":product" element={<StandardProductPageUa />} />
          </Route>
          <Route path="product"
          >
            <Route path=":product" element={<ProductPageUa />} />
          </Route>
      
          <Route path="shops" element={<ShopsUa />} />
          <Route path="contacts" element={<ContactsUa />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
