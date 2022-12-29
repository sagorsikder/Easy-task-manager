import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const CompletedTask = () => {
    useTitle('my task')
    const {user} = useContext(AuthContext)
    const [incompleted, setIncomplete] = useState(null)
    const [task, setTask] = useState([])
    console.log(task)
    useEffect(()=>{
        fetch(` https://easy-task-manager-server.vercel.app/completetask?email=${user.email}`)
        .then(res=> res.json())
        .then(data=>setTask(data))
    },[incompleted,user.email])

    const handleComplete=(id)=>{

  
        fetch(` https://easy-task-manager-server.vercel.app/update2?id=${id}`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(task)
        })
        .then(res=> res.json())
        .then(data=>setIncomplete(data))
    
   }

   const handleDelete=(id)=>{

  
    fetch(` https://easy-task-manager-server.vercel.app/delete1?id=${id}`,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(task)
    })
    .then(res=> res.json())
    .then(data=>setIncomplete(data))

}

    return (
        <div className='bg-blue-500 min-h-[600px]'>
        <h1 className='text-center lg:text-5xl font-bold  text-white pt-10 mb-5'>Completed task</h1>
        <div className='w-3/4 mx-auto'>

       
       {
        task.map(ts=> <div className='rounded bg-slate-500 mb-5 p-3 text-white relative'>

             <button onClick={()=>handleComplete(ts._id)} className='bg-blue-500 hover:bg-blue-700 py-1 px-2 absolute top-2 right-2'>Not Complete</button>
            <h3 className='font-semibold text-3xl border-y-orange-500'>{ts?.name}</h3>
            <p>Email: {ts?.email}</p>
            <p>Date: {ts?.date}</p>
            <p>Task description: {ts?.taskDetails}</p>
            <div className='mt-3'>
           <button  onClick={()=>handleDelete(ts._id)} className='bg-yellow-500 text-red-800 hover:bg-yellow-700  rounded px-1'>delete</button>
            <button className='bg-yellow-500 text-red-800 hover:bg-yellow-700 rounded  px-1 ml-2'>edit</button>
           </div>
             </div>)
       }
       
        <div>

        </div>
        </div>
        </div>
    );
};

export default CompletedTask;