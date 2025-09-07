import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, createBrowserRouter, RouterProvider} from "react-router";
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <RouterProvider router={router} />
  </BrowserRouter>,
)
