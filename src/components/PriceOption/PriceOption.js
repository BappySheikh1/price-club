import React from 'react';
import Feature from '../Feature/Feature';


const PriceOption = ({pricingOption}) => {
    const {features}=pricingOption
    return (
        <div className='bg-indigo-300 m-3 rounded-md p-6'>
            <div>
                <p className='mb-4'><span className='text-6xl font-bold text-white'>{pricingOption.price}</span>
                <span className='text-2xl text-gray-600'>/mon</span></p>
                <p><span className='text-3xl '>{pricingOption.name}</span></p>
            </div>
            
            {
             features.map((feature,idx) => <Feature
             key={idx}
              feature={feature}
             ></Feature>)
            }
            <button className='bg-green-500 hover:bg-green-300 duration-500 w-full p-2 rounded-md text-white font-bold'>Buy Now</button>
        </div>
    );
};

export default PriceOption;