import { GlobalStyle } from './GlobalStyle';
import {Contater} from './App.styled';
import {useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

// import AppLayout from './AppLayout/AppLayout';
// import Home from 'Pages/Home/Home';
// import Reistr from 'Pages/Registr/Registr';
// import Login from 'Pages/Login/Login';
// import ContactsPage from 'Pages/ContactsPage/ContactsPage';

import { useAuth } from 'redux/hook/useAuth';
import { refreshUser } from 'redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute'; 
import { PrivateRoute } from './PrivateRoute';

const AppLayout = lazy(() => import('./AppLayout/AppLayout'));
const Home = lazy(()=> import('Pages/Home/Home'));
const Reistr = lazy(()=> import('Pages/Registr/Registr'));
const Login = lazy(()=> import ('Pages/Login/Login'));
const ContactsPage = lazy(()=> import ('Pages/ContactsPage/ContactsPage'))


    export const App =()=> {
      
      const dispatch = useDispatch();

      const { isRefreshing } = useAuth();
    
      useEffect(() => {
        dispatch(refreshUser());
    
      }, [dispatch]);
    
      return isRefreshing ? (
    <p>Оновлення користувача...</p>
  ) : (
<Contater>
          <Routes>
            <Route path = "/" element = {<AppLayout/>}>
              <Route index element={<Home/>}/>
              <Route path = "register" element = {<Reistr/>}/>
              <Route path = "login" element ={<RestrictedRoute redirectTo="/contacts" component={<Login/>} />}/>
              {/* <Route path = "contacts" element ={ <ContactsPage />} /> */}
              <Route path = "contacts" element ={ <PrivateRoute redirectTo="/login" component={<ContactsPage />} />}/>
              <Route path="*" element={<Home/>} />
            </Route>
          </Routes>

     <GlobalStyle/>
      </Contater>
  )

    };
    
