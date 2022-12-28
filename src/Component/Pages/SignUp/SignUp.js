import  {React, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';


const SignUp = () => {

    const{createUser} = useContext(AuthContext)
    const navigate = useNavigate();

    useTitle('signup')
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSignUpForm = event =>{
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password)

        createUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user)
      navigate(from,{replace:true})
      form.reset()
        })
        .catch(err=>console.error(err))



       
    }

    return (
     
  <div className=" w-full flex flex-col my-5 lg:flex-row">
    <div className="text-center lg:w-1/2 my-5 lg:text-left">
      
      <img className='h-full w-full p-3 ' src='https://th.bing.com/th/id/R.0bfb188ab99a5c96e0902ef48dace5bc?rik=hvv7LwqmLhW1Tw&riu=http%3a%2f%2fgocommunityapp.com%2fwp-content%2fuploads%2f2016%2f01%2fsign_up_blue.png&ehk=UjZZaJ6QTrbazF2XH8GvVJmBMRraWCJWg6gCF2P0LC0%3d&risl=&pid=ImgRaw&r=0' alt="" />
    </div>
    <div className="card flex-shrink-0 lg:w-1/2 my-5 py-5 max-w-sm shadow-2xl ">
      <div className="card-body">

      <h1 className="text-5xl font-bold">Sign Up Now!</h1>
        <form onSubmit={handleSignUpForm}  >
        <label className="label">
            <span className="label-text font-bold">Name</span>
          </label>
          <input type="text" name='name' placeholder="Name" className="input input-bordered" />
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
          <input className='btn btn-warning my-3' type="submit" value="Sign Up" />
       
        </form>

      </div>
    </div>
  </div>

    );
};

export default SignUp;