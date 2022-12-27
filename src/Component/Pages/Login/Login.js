import {React,useContext} from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
const Login = () => {

  const {signIn,googleLogin} = useContext(AuthContext)


  useTitle('login')
  const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const google =()=>{
      const provider = new GoogleAuthProvider();
      googleLogin(provider)
      .then(result=>{
        const user = result.user;
        console.log(user)
      })
      .catch(err=>console.log(err))
    }

  const handleLogin=(event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email,password)

    signIn(email,password)
    .then(result=>{
      console.log(result.user)

      navigate(from,{replace:true})
      form.reset()
    })
    .then(err=>console.log(err))

  }

    return (
  <div className=" w-full flex flex-col my-5 lg:flex-row">
    <div className="text-center my-5 lg:text-left">
      
      <img  src='https://www.sehat.com/sht-new-img/new/login-new.png'  className='h-full w-3/5 p-3 '  alt="" />
    </div>
    <div className=" flex-shrink-0 w-full my-5 py-5 max-w-sm shadow-2xl ">
      <div >

      <h1 className="text-5xl font-bold">Login now!</h1>
        <form onSubmit={handleLogin} >
          <label className="label">
            <span className="label-text font-bold">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" />
       
          <label className="label">
            <span className="label-text font-bold">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
           
          </label>
          <input className='btn btn-warning my-3' type="submit" value="Sign In" />
       
        </form>


        <button onClick={google} className='btn btn-warning'>Google</button>
       
      </div>
    </div>
  </div>
    );
};

export default Login;