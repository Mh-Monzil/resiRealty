import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import "react-toastify/dist/ReactToastify.css";
AOS.init();
import {
  createBrowserRouter, 
  RouterProvider, 
} from "react-router-dom"; 
import Root from './Root/Root';
import Home from './pages/Home/Home';
import ErrorPage from './ErrorPage/ErrorPage';
import ContextProvider from './provider/ContextProvider';
import ViewProperty from './pages/ViewProperty/ViewProperty';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import PrivateRoute from './privateRoute/PrivateRoute';
import UserProfile from './components/UserProfile/UserProfile';
import { ToastContainer } from 'react-toastify';
import Services from './pages/Services/Services';
import ContactUs from './pages/ContactUs/ContactUs';

const router = createBrowserRouter([ 
  { 
  path: "/", 
  element: <Root />, 
  errorElement: <ErrorPage />,
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/view-property/:id',
      element: <PrivateRoute><ViewProperty /></PrivateRoute>
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/user-profile',
      element: <PrivateRoute><UserProfile /></PrivateRoute>
    },
    {
      path: '/services',
      element: <Services />
    },{
      path: "/contact-us",
      element: <ContactUs />
    }
  ]
  }, 
]); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider >
      <RouterProvider router={router} />
      <ToastContainer className='mt-20' theme="colored" /> 
    </ContextProvider>
  </React.StrictMode>,
)
