import  { React,useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';



const PrivateRoutes = ({children}) => {
    const location = useLocation();
  const {user,loading} = useContext(AuthContext);

  if(loading){
    return <div><progress className="progress w-56"></progress></div>
  }
  if(user && user.uid){
    return children;
  }
  return <Navigate to='/login' state={{from:location}} replace ></Navigate>

};

export default PrivateRoutes;