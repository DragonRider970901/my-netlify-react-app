import logo from './logo.svg';
import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import About from './About';
import SignUp from './SignUp';
import Articles from './Articles';
import Categories from './Categories';
import Profile from './Profile';
import Root from './Root';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Root />} >
      <Route path='about' element={<About />} />
      <Route path='sign-up' element={<SignUp />} />
      <Route path='articles' element={<Articles />} />
      <Route path='categories' element={<Categories />} />
      <Route path='profile' element={<Profile />} />
    </Route>
    
  ));
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
