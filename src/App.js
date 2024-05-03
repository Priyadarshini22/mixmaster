import logo from './logo.svg';
import './App.css';
import {RouteProvider,createBrowserRouter}  from 'react-router-dom';
function App() {
  const route = createBrowserRouter([
    {
      path:'/',
      element : <h2>Home</h2>
    }
  ])
  return (
    <div className="App">
      <RouteProvider router={route}/>
    </div>
  );
}

export default App;
