import './App.css';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import AuthProvider from './context/AuthProvider';
import Home from './components/pages/home/Home';
import Footer from './components/shared/footer/Footer';
import Header from './components/shared/header/Header';
import PrivateRoute from './components/pages/privateRoute/PrivateRoute';
import Login from './components/pages/login/Login';
import NotFound from './components/pages/notfound/NotFound';
import AddMedicine from './components/pages/addMedicine/AddMedicine'
import Register from './components/pages/register/Register';
import Details from './components/pages/details/Details';
import Pharmacy from './components/pages/pharmacy/Pharmacy'
import Review from './components/pages/review/Review'
import MyOrders from './components/pages/myorders/MyOrders'
import Payment from './components/pages/payment/Payment'
import MakeAdmin from './components/pages/makeAdmin/MakeAdmin';
import ManageOrders from './components/pages/manageOrders/ManageOrders'
import ManageProducts from './components/pages/manageProducts/ManageProducts'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/home' ><Home /></Route>

          <PrivateRoute path='/pharmacy'><Pharmacy /></PrivateRoute>
          <PrivateRoute path='/myorders'><MyOrders /></PrivateRoute>
          <PrivateRoute path='/manageorders'><ManageOrders /></PrivateRoute>
          <PrivateRoute path='/manageproducts'><ManageProducts /></PrivateRoute>
          <PrivateRoute path='/details/:id'><Details /></PrivateRoute>
          <PrivateRoute path='/addmedicine'><AddMedicine/></PrivateRoute>
          <PrivateRoute path='/review'><Review /></PrivateRoute>
          <PrivateRoute path='/payment'><Payment /></PrivateRoute>
          <PrivateRoute path='/makeadmin'><MakeAdmin /></PrivateRoute>
          
          <Route path='/registration'><Register /></Route>
          <Route path='/login'><Login /></Route>
          <Route path='*'><NotFound /></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;