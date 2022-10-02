import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PhoneBar = () => {
    const [phone, setPhone]=useState([])
    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then( res => {
            const phoneLoaded =res.data.data
            const phoneData=phoneLoaded.map(phone => {
                const parts=phone.slug.split('-');
                const price =parseInt(parts[1])
                const singlePhone={
                    name:phone.phone_name,
                     price: price
                }
                return singlePhone;
            })
            // console.log(phoneData)
            setPhone(phoneData)
        })

        
    },[])
    return (
        <div>
             <BarChart width={1200} height={400} data={phone}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey="name"></XAxis>
          <YAxis />
          <Tooltip></Tooltip>
        </BarChart>
        </div>
    );
};

export default PhoneBar;