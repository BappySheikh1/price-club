import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({feature}) => {
    return (
        <div>
           <div className='my-4 flex items-center'>
            <CheckCircleIcon className="h-6 w-6 text-green-500"/>
        <p className='ml-5'>{feature}</p>
            </div> 
        </div>
    );
};

export default Feature;