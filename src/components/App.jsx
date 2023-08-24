import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/Contacts/actions';
import { Route, Routes } from 'react-router-dom';

import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';
import ContactsPage from 'pages/ContactsPage';
import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage/HomePage';


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />}/>
        <Route path='register' element={<RegisterPage />}/>
        <Route path='loginUp' element={<LoginPage />}/>
        <Route path='contacts' element={<ContactsPage />}/>
      </Route>
    </Routes>
 
  );
};

export default App;
