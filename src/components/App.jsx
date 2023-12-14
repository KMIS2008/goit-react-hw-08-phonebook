import { GlobalStyle } from './GlobalStyle';
import {Contater} from './App.styled';
import {useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import AppLayout from './AppLayout/AppLayout';
import { useAuth } from 'redux/hook/useAuth';
import { refreshUser } from 'redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute'; 
import { PrivateRoute } from './PrivateRoute';

import { lazy } from 'react';
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
              <Route path="register" element = { <RestrictedRoute redirectTo="/login" component={<Reistr />} />}/>
              <Route path = "login" element ={<RestrictedRoute redirectTo="/contacts" component={<Login/>} />}/>
              <Route path = "contacts" element ={ <PrivateRoute redirectTo="/login" component={<ContactsPage />} />}/>
              <Route path="*" element={<Home/>} />
            </Route>
          </Routes>

     <GlobalStyle/>
      </Contater>
  )

    };
    
