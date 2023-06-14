import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Pagamento from './pages/Pagamento.jsx'
import Carrinho from './pages/Carrinho.jsx'
import Conjuntos from './pages/Conjuntos.jsx'
import Error from './pages/Error.jsx'
import DetalhesProduto from './pages/DetalhesProduto.jsx'
import TopsBlusas from './pages/TopsBlusas.jsx'
import LeggingsShorts from './pages/LeggingsShorts.jsx'
import Contato from './pages/Contato.jsx'

 const router = createBrowserRouter ([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/conjuntos",
        element: <Conjuntos/>
      },
      {
        path: "/detalhes",
        element: <DetalhesProduto/>
      },
      {
        path: "/carrinho",
        element: <Carrinho/>
      },
      {
        path: "/pagamento",
        element: <Pagamento/>
      },
      {
        path: "/tops",
        element: <TopsBlusas/>
      },
      {
        path: "/leggings",
        element: <LeggingsShorts/>
      },
      {
        path: "/contato",
        element: <Contato/>
      }
    ] 
  }
 ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
