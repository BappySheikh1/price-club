import React from 'react';
import PriceOption from '../PriceOption/PriceOption';


const Pricing = () => {
    const pricingOption=[
        {id: 1, name: "Free", price:0, features:[
            "Awesome Feature",
            "Extra Feature",
            "Unnecessary Feature",
            "Will never use Feature",
            "Hudai Feature",
            "Ajaira Feature"

        ]
    },
        {id: 2, name: "Medium", price:9.99 ,features:[
            "Everything on Free",
            "Awesome Feature",
            "Extra Feature",
            "Unnecessary Feature",
            "Will never use Feature",
            "Hudai Feature",
            "Ajaira Feature"

        ]},
        {id: 3, name: "Premium", price:19.99,features:[
            "Everything on Premium",
            "Awesome Feature",
            "Extra Feature",
            "Unnecessary Feature",
            "Will never use Feature",
            "Hudai Feature",
            "Ajaira Feature"

        ]},
    ]
    return (
        <div>
            <h1 className='text-5xl font-bold bg-indigo-300 p-12 text-white'>Best Deal of The town</h1>
             <div className='grid md:grid-cols-3 mt-4'>
             {
                pricingOption.map(pricing => <PriceOption
                key={pricing.id}
                pricingOption={pricing}
                ></PriceOption>)
             }
             </div>
        </div>
    );
};

export default Pricing;