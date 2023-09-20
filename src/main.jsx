import React from 'react'
import ReactDOM from 'react-dom/client'
//import ErrorPage from './error-page';

import './index.css'
//import {createBrowserRouter,RouterProvider} from 'react-router-dom'
//import Root from './routes/root.jsx'
import { BrowserRouter } from 'react-router-dom';
import App from './App';

/*const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />
  },
]);*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <App></App>
      </BrowserRouter>
  </React.StrictMode>
)
