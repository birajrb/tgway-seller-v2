import { Routes } from 'react-router-dom';

import BankAccount from './pages/BankAccount';
import SellerProfile from './pages/SellerProfile';

function AppRoutes() {
  <Routes>
    <Routes path="/seller-profile" elements={<SellerProfile />} />
    <Routes path="/bank-account" elements={<BankAccount />} />
  </Routes>;
}

export default AppRoutes;
