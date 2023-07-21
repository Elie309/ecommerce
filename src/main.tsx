import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorElement from './components/ErrorElement.tsx';
import Login, {action as actionLogin} from './pages/auth/Login.tsx';
import Register, {action as actionRegister} from './pages/auth/Register.tsx';
import ProductView, { loader as ProductLoader } from './pages/product/ProductView.tsx';
import ProductsList, {loader as AllProductsLoader} from './pages/product/ProductsList.tsx';
import AddProduct, { action as actionProductAdd } from './pages/product/AddProduct.tsx';
import ForgotPassword from './pages/auth/ForgotPassword.tsx';
import Logout, { loader as LogoutLoader } from './pages/auth/Logout.tsx';

const router = createBrowserRouter([
  { path: "/",
    element: <App />,
  },

  // Auth related routes
  {
    path: "/login",
    element: <Login />,
    action: actionLogin,
  },
  {
    path: "/register",
    element: <Register />,
    action: actionRegister,
  },
  {
    path: "/logout",
    element: <Logout />,
    loader: LogoutLoader,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
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
  { path: "/:path/*",
    element: <ErrorElement title="404 Not Found" message="Page Not Found" goBackLink="/" />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
