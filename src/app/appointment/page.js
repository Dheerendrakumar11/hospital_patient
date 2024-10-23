'use client'
import { useState } from 'react';
import axios from 'axios';
import Layout from '../component/layout';
import Swal from 'sweetalert2';

const Appointment = () => {
  const [add, setAdd] = useState({
    p_name: '',
    email: '',
    mobile: '',
    Date: '',
    symptoms: '',
    message: ''
  });

  const handleChange = (e) => {
    setAdd({ ...add, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post('http://localhost:8010/apoinment/add', add);
      console.log(result.data);
      Swal.fire({
        icon: 'success',
        title: 'Appointment Booked!',
        text: 'Your appointment has been successfully booked.',
      }).then(() => {
        // Reload the page after the alert is closed
        window.location.reload();
      });
    } 
    catch (err) {
      console.log("err",err);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong! Please try again later.',
      });
    }
  }

  return (
    <Layout>
      <div className="pt-8">
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-16">
          <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-[#059669]">Book Appointment</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700">Full Name</label>
                <input 
                  type="text" 
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md" 
                  required
                  name='p_name'
                  value={add.p_name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-gray-700">Symptoms</label>
                <input 
                  type="text" 
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md" 
                  required
                  name='symptoms'
                  value={add.symptoms}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-gray-700">Mobile Number</label>
                <input 
                  type="text" 
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md" 
                  required
                  name='mobile'
                  value={add.mobile}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input 
                  type="email" 
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md" 
                  required
                  name='email'
                  value={add.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-gray-700">Preferred Date</label>
                <input 
                  type="date" 
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md" 
                  required
                  name='Date'
                  value={add.Date}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-gray-700">Message</label>
                <textarea 
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md" 
                  rows="3"
                  name='message'
                  value={add.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Appointment;
