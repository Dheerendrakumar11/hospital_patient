'use client'
import { useEffect, useState } from 'react';
import Layout from '../component/layout';
import axios from 'axios';
const About = () => {
  const [data,setData] = useState([]);

  const getData = ()=>{

    axios.get('http://localhost:8010/doctor/profile')
    .then((result)=>{
        setData(result.data)
        console.log(result.data)
    })
    
  }
  useEffect(()=>{
    getData()
  })

  return (
    <Layout>
        <div className="pt-16 ">
        
        <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Profiles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src={item.image} alt={`${item.emp_name}'s profile`} />
            <div className="p-4">
              <h2 className="text-xl font-bold">{item.emp_name}</h2>
              <p className="text-gray-600">{item.role_name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
      </div>

    </Layout>
  );
};

export default About;
