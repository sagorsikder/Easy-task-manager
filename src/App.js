import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Component/Layout/Main';
import AddTask from './Component/Pages/AddTask/AddTask';
import CompletedTask from './Component/Pages/CompletedTask/CompletedTask';
import Login from './Component/Pages/Login/Login';
import MyTask from './Component/Pages/MyTask/MyTask';
import SignUp from './Component/Pages/SignUp/SignUp';
import PrivateRoutes from './Component/PrivateRoutes/PrivateRoutes';

const routes = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      
      {
        path:'/',
        element:<AddTask></AddTask>
      },
      {
        path:'/mytask',
        element:<PrivateRoutes><MyTask></MyTask></PrivateRoutes>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      },
      {
        path:'/completetask',
        element:<PrivateRoutes><CompletedTask></CompletedTask></PrivateRoutes>
      }
    ]
  }
])


function App() {
  return (
 <div>
  <RouterProvider router={routes}></RouterProvider>
 </div>
  );
}

export default App;
