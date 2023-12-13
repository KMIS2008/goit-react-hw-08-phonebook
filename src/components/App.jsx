import { GlobalStyle } from './GlobalStyle';
// import {FormAddContact} from './FormAddContact/FormAddContact';
// import {SectionTitle} from './SectionTitle/SectionTitle';
// import {ContactsList} from './Contacts/Contacts';
// import {FilterConctacts} from './Filter/Filter';
import {
        Contater} from './App.styled';
// import {useEffect } from 'react';
// import { selectError, selectIsLoading } from 'redux/selects';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from 'redux/operations';
import { Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';

import AppLayout from './AppLayout/AppLayout';
import Home from 'Pages/Home/Home';
import Reistr from 'Pages/Registr/Registr';
import Login from 'Pages/Login/Login';
import ContactsPage from 'Pages/ContactsPage/ContactsPage';

// const AppLayout = lazy(() => import('./AppLayout/AppLayout'));
// const Home = lazy(()=> import('Pages/Home/Home'));
// const Reistr = lazy(()=> import('Pages/Registr/Registr'));
// const Login = lazy(()=> import ('Pages/Login/Login'));
// const ContactsPage = lazy(()=> import ('Pages/ContactsPage/ContactsPage'))


    export const App =()=> {
      // const error = useSelector(selectError);
      // const isLoading = useSelector(selectIsLoading);
      // const dispatch = useDispatch();

      // useEffect(() => {
      //   dispatch(fetchContacts());
      // }, [dispatch]);
    
      return (

        <Contater>
          <Routes>
            <Route path = "/" element = {<AppLayout/>}>
              <Route index element={<Home/>}/>
              <Route path = "register" element = {<Reistr/>}/>
              <Route path = "login" element ={<Login/>}/>
              <Route path = "contacts" element ={<ContactsPage/>}/>
              <Route path="*" element={<Home/>} />
            </Route>
            
          </Routes>

           {/* {isLoading && (<p>...isLoading</p>) }
           {error && (<p>Error</p>)} */}
           {/* <SectionTitle title="Phonebook"/> */}
           {/* <FormAddContact/> */}
           {/* <TitleContacts>Contacts</TitleContacts> */}
           {/* <FilterConctacts/> */}
           {/* <ContactsList/> */}
      
           <GlobalStyle/>
    
        </Contater>
      );
    };
    
