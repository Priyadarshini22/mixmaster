import logo from './logo.svg';
import './App.css';
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import {About, Cocktail, Error, Home, Landing, NewsLetter} from './components/main.js';
import { Loader as loaderPage } from './components/Landing/index.js';
import SingleErrorPage from './components/SingleErrorPage/index.js';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element: <Landing/>,
        errorElement:<SingleErrorPage/>,
        loader:loaderPage
      },
      {
        path:"/about",
        element: <About/>
      },
      {
        path:"/cocktail",
        element: <Cocktail/>
      },
      {
        path:"/newsletter",
        element: <NewsLetter/>
      },
    ]
  },
  {
    path:"/cocktail",
    element: <Cocktail/>
  }
])
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
