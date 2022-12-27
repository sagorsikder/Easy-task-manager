import React from 'react';
import useTitle from '../../Hooks/useTitle';

const CompletedTask = () => {
    useTitle('completed task')
    return (
        <div>
            <h1 className='text-center'>Completed task page.</h1>
        </div>
    );
};

export default CompletedTask;