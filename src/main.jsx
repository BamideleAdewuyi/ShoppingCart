import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HomePage from './components/HomePage/HomePage.jsx'
import Shop from './components/ShopPage/ShopPage.jsx'
import Cart from './components/cartPage/cartPage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "/", element: <HomePage />},
      {path: "shop", element: <Shop />},
      {path: "cart", element: <Cart />},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
