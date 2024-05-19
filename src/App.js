import logo from './logo.svg';
import './App.css';
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import {About, Cocktail, Error, Home, Landing, NewsLetter} from './components/main.js';
import { Loader as loaderPage } from './components/Landing/index.js';
import {loader as singeCocktailLoader} from './components/Cocktail/index.js';
import SingleErrorPage from './components/SingleErrorPage/index.js';
import { action } from './components/NewsLetter/index.js';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const queryClient = new QueryClient({
  defaultOptions:{
  queries:{
    staleTime: 1000*60*5
  }
}
})
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
        loader:loaderPage(queryClient)
      },
      {
        path:"/about",
        element: <About/>
      },
      {
        path:"/cocktail/:id",
        element: <Cocktail/>,
        errorElement:<SingleErrorPage/>,
        loader:singeCocktailLoader(queryClient)
      },
      {
        path:"/newsLetter",
        element: <NewsLetter/>,
        action:action,
        errorElement:<SingleErrorPage/>
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
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
    <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  );
}

export default App;
