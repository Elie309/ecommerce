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
import { AuthProvider, IAuthValue } from "./components/AuthProvider.tsx";
import Profile from "./pages/clients/Profile.tsx";
import Cart from "./pages/clients/Cart.tsx";





export default function App() {

  const initialState: IAuthValue = {
    authenticated: false,
    username: "",
    email: "",
    cardId: "",
  }

  const [userInfo, setUserInfo] = useState<IAuthValue>(initialState);
  const [loading, setLoading] = useState<boolean>(true);

  const isAuthenticated = userInfo.authenticated;


  useEffect(() => {

    const checkIfUserLoggedIn = async () => {

      try {
      setLoading(true);

        const response = await User.getLoggedUserInformation();

        if (response.data !== null) {

          setUserInfo({
            authenticated: response.data !== null,
            username: response.data.displayName!,
            email: response.data.email!,
            cardId: response.data.uid,
          });

        }else {
          setUserInfo(initialState);
        }
      }catch(error: any){

        setUserInfo(initialState);

      }finally{
        setLoading(false);
      }
    }

    checkIfUserLoggedIn();

  }, []);

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
      element: isAuthenticated ? <Navigate to={"/products"} /> : <Login />,
      action: actionLogin,
    },
    {
      path: "/register",
      element: isAuthenticated ? <Navigate to={"/products"} /> : <Register />,
      action: actionRegister,
    },
    {
      path: "/logout",
      element: <Logout />,
      loader: LogoutLoader,
    },
    {
      path: "/forgot-password",
      element: isAuthenticated ? <Navigate to={"/products"} /> : <ForgotPassword />,
      errorElement: <ErrorElement title="404 Not Found" message="Page Not Found" goBackLink="/" />,
    },

    // User related routes

    {
      path: "/profile",
      element: isAuthenticated ? <Profile /> : <Navigate to={"/login"} />,
      errorElement: <ErrorElement title="404 Not Found" message="User Not Found" goBackLink="/" />,
    },
    {
      path: "/cart",
      element: isAuthenticated ? <Cart /> : <Navigate to={"/login"} />,
    },

    // Sales related routes

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
      <AuthProvider value={userInfo}>
        <RouterProvider router={routerBroswer} />
      </AuthProvider>
    </>
  )


}

