import React, { useEffect, useState } from 'react';
import useTitle from '../../Hooks/useTitle';

const CompletedTask = () => {
    useTitle('my task')

    const [task, setTask] = useState([])
    console.log(task)
    useEffect(()=>{
        fetch('http://localhost:5000/mytask')
        .then(res=> res.json())
        .then(data=>setTask(data))
    },[])
    return (
        <div className='bg-blue-500 min-h-[600px]'>
        <h1 className='text-center lg:text-5xl font-bold  text-white pt-10 mb-5'>Completed task</h1>
        <div className='w-3/4 mx-auto'>

       
       {
        task.map(ts=> <div className='rounded bg-slate-500 mb-5 p-3 text-white relative'>

             <button className='bg-blue-500 hover:bg-blue-700 py-1 px-2 absolute top-2 right-2'>Not Complete</button>
            <h3 className='font-semibold text-3xl border-y-orange-500'>{ts?.name}</h3>
            <p>Email: {ts?.email}</p>
            <p>Date: {ts?.date}</p>
            <p>Task description: {ts?.taskDetails}</p>
            
             </div>)
       }
       
        <div>

        </div>
        </div>
        </div>
    );
};

export default CompletedTask;