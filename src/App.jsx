import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LayoutEn from "../pages/en/LayoutEn";
import HomePageEn from "../pages/en/HomePageEn";
import ShopsEn from '../pages/en/ShopsEn';
import MenuEn from '../pages/en/MenuEn';
import FranchiseEn from '../pages/en/FranchiseEn';
import BlogEn from '../pages/en/BlogEn';
import ContactsEn from '../pages/en/ContactsEn'

function App() {
  return <Router>
    <Routes>
      <Route path="*" element={<Navigate to='/en' />} />
      <Route path="/en" element={<LayoutEn />}>
        <Route index element={<HomePageEn />} />
        <Route path="menu" element={<MenuEn />} />
        <Route path="franchise" element={<FranchiseEn />} />
        <Route path="blog" element={<BlogEn />} />
        <Route path="shops" element={<ShopsEn />} />
        <Route path="contacts" element={<ContactsEn />} />
      </Route>
    </Routes>
  </Router>
}

export default App;
