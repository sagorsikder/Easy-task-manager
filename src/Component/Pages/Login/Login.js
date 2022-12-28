import {React,useContext} from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';

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
    <div className="text-center my-5 lg:w-1/2 lg:text-left">
      
      <img  src='https://www.sehat.com/sht-new-img/new/login-new.png'  className='h-full w-full p-3 '  alt="" />
    </div>
    <div className=" flex-shrink-0 lg:w-1/2 flex justify-center my-5 py-5 max-w-sm shadow-2xl ">
      <div className='w-4/5 mx-auto' >

      <h1 className="text-5xl text-center mb-10 font-bold">Login now!</h1>
        <form className='flex flex-col' onSubmit={handleLogin} >

        
                <label className=' font-semibold my-2'>Email</label>
                <input className='mb-2  p-2 rounded'  type="email" name="email" placeholder='Enter your email' />
                <label className=' font-semibold my-2'>Password</label>
                <input className='mb-2  p-2 rounded' type="password" placeholder='Enter your password' name="password" />

                <div className='pb-1 w-full flex justify-center mt-3'><input className=' bg-green-500 hover:bg-green-800  p-2 rounded w-full font-semibold'  type="submit" value="Login" /></div>
       
        </form>

        <div  className='pb-10 w-full flex justify-center mt-1'><button onClick={google} className=' bg-green-500 hover:bg-green-800 font-semibold p-2 rounded w-full'>Google</button></div>   
        <p className='font-semibold'>New to easy-task manager? let's go <button className='text-green-600 hover:text-green-800 '><Link to='/signup'>SignUp</Link></button></p> 
      </div>
    </div>
  </div>
    );
};

export default Login;