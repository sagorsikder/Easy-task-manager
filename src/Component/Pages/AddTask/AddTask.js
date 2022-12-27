import React from 'react';
import useTitle from '../../Hooks/useTitle';

const AddTask = () => {
    useTitle('add task');
    return (
        <div>
            <h1 className='text-center'>Add task page</h1>
        </div>
    );
};

export default AddTask;