import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import ErrorElement from './components/ErrorElement.tsx';

import Login, { action as actionLogin } from './pages/auth/Login.tsx';
import Register, { action as actionRegister } from './pages/auth/Register.tsx';
import ProductView, { loader as ProductLoader } from './pages/product/ProductView.tsx';
import ProductsList, { loader as AllProductsLoader } from './pages/product/ProductsList.tsx';
import AddProduct, { action as actionProductAdd } from './pages/product/AddProduct.tsx';
import ForgotPassword from './pages/auth/ForgotPassword.tsx';
import Logout, { loader as LogoutLoader } from './pages/auth/Logout.tsx';


import User from './logic/Objects/User.ts';
import Home from "./pages/Home.tsx";
import { useEffect, useState } from "react";





export default function App() {

  
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  

  useEffect(() => {



    const checkIfUserLoggedIn = async () => {
      setLoading(true);

      await User.isLoggedIn().then((isLoggedIn) => {
        setIsUserLoggedIn(isLoggedIn);
      }).catch(() => {
        setIsUserLoggedIn(false);
      
      }).finally(() => {
        setLoading(false);
      });

    }

    checkIfUserLoggedIn();

    
  }, [isUserLoggedIn]);


 

  if (loading) {

    return (

      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500"></div>
      </div>


    )

  }

  const routerBroswer = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    // Auth related routes
    {
      path: "/login",
      element: isUserLoggedIn ? <Navigate to={"/products"} /> : <Login />,
      action: actionLogin,
    },
    {
      path: "/register",
      element: isUserLoggedIn ? <Navigate to={"/products"} /> : <Register />,
      action: actionRegister,
    },
    {
      path: "/logout",
      element: <Logout />,
      loader: LogoutLoader,
    },
    {
      path: "/forgot-password",
      element: isUserLoggedIn ? <Navigate to={"/products"} /> : <ForgotPassword />,
      errorElement: <ErrorElement title="404 Not Found" message="Page Not Found" goBackLink="/" />,
    },

    // Products related routes
    {
      path: "/products",
      element: <ProductsList />,
      loader: AllProductsLoader,
    },
    {
      path: "/products/:id",
      element: <ProductView />,
      loader: ProductLoader,
      errorElement: <ErrorElement title="404 Not Found" message="Product Not Found" goBackLink="/products" />,
    },
    {
      path: "/products/:id/edit",
      element: <ProductView />,
    },
    {
      path: "/products/new",
      element: <AddProduct />,
      action: actionProductAdd
    },

    // Catch-all 404
    {
      path: "/:path/*",
      element: <ErrorElement title="404 Not Found" message="Page Not Found" goBackLink="/" />,
    },

  ]);

  return (
    <>
      <RouterProvider router={routerBroswer} />
    </>
  )


}

