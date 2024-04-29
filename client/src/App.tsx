import './App.css';
import Pokemons from './components/Pokemons';
import SearchBar from './components/SearchBar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <SearchBar/>,
      children:[
        {
          path:'/',
          element: <Pokemons/>
        }
      ]
    }
  ])
 

  return (
    <>
       <RouterProvider router={router}/>
    </>
  )
}

export default App
