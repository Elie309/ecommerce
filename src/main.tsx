import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorElement from './components/ErrorElement.tsx';
import Login from './pages/auth/Login.tsx';
import Register from './pages/auth/Register.tsx';
import Product, { loader as ProductLoader } from './pages/product/Product.tsx';
import Products from './pages/product/Products.tsx';
import AddProduct, { action as actionProductAdd } from './pages/product/AddProduct.tsx';

const router = createBrowserRouter([
  { path: "/",
    element: <App />,
  },

  // Auth related routes
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  // Products related routes
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/:id",
    element: <Product />,
    loader: ProductLoader,
    errorElement: <ErrorElement title="404 Not Found" message="Product Not Found" goBackLink="/products" />,
  },
  {
    path: "/products/:id/edit",
    element: <Product />,
  },
  {
    path: "/products/new",
    element: <AddProduct />,
    action: actionProductAdd
  },

  // Catch-all 404
  { path: "/:path*",
    element: <ErrorElement title="404 Not Found" message="Page Not Found" goBackLink="/" />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
