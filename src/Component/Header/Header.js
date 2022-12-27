import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Header = () => {

    const{user,logOut}=useContext(AuthContext)
    const menuItem = <>
             <li className='bg-blue-500 hover:bg-blue-800 text-white mx-1 rounded px-2 py-1'><Link to='/'>Add task</Link></li>
             <li className='bg-blue-500 hover:bg-blue-800 text-white mx-1 rounded px-2 py-1'><Link to='/mytask'>My task</Link></li>
             <li className='bg-blue-500 hover:bg-blue-800 text-white mx-1 rounded px-2 py-1'><Link to='/completetask'>Complete task</Link></li>
        </>
    return (
        <div className='w-full bg-slate-500 py-3 relative '>
           {
            user?<button className='absolute top-2 right-2 text-white rounded font-bold bg-blue-500 hover:bg-blue-700 mr-2 py-1 px-2' onClick={logOut}>logout</button>:<><div className='lg:flex absolute top-1 right-2'>
            <p className='text-[10px] lg:mt-1 text-white rounded font-bold bg-blue-500 hover:bg-blue-700 mr-2 py-1 px-2'><Link to='/login'>login</Link></p>
            <p className='text-[10px] mt-1 text-white rounded font-bold bg-blue-500 hover:bg-blue-700 mr-2 py-1 px-2'><Link to='/signup'>signup</Link></p>
             </div>
        </>
           }

            <ul className='flex justify-center'>
           {menuItem}
            </ul>
        </div>
    );
};

export default Header;