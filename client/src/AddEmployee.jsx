import React, { useState } from 'react'
import axios from 'axios'


const AddEmployee = () => {

  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    }
  const handleSubmit = async (e) => {
    e.preventDefault();
 try {
     const res = await axios.post("http://localhost:3001/addEmployee", {
       firstname: form.firstname,
       lastname: form.lastname,
       email: form.email,
       password: form.password,
     });
     console.log(res);
 } catch (error) {
  alert('Error while adding employee');
  console.log(error);
 }
    
  }

  return (
    <div className=" flex justify-center items-center">
      {/* create a form the form contains firstname, lastname, email, password using tailwind */}
      <form
        className="flex flex-col gap-4 w-[300px] justify-center items-center"
        onSubmit={handleSubmit}
      >
        <label htmlFor="lastName" className="text-xl font-semibold">
          FirstName
          <input
            type="text"
            id="lastName"
            name="firstname"
            onChange={handleInputChange}
            value={form.firstname}
            placeholder="FirstName"
            className="w-full px-8 py-2 rounded
          -lg bg-gray-100 border-2 focus:outline-none
          focus:ring-2 focus:border-transparent"
          />
        </label>
        <label htmlFor="lastName" className="text-xl font-semibold">
          Last Name
          <input
            type="text"
            id="lastName"
            name="lastname"
            value={form.lastname}
            onChange={handleInputChange}
            placeholder="lastName"
            className="w-full px-8 py-2 rounded
          -lg bg-gray-100 border-2 focus:outline-none
          focus:ring-2 focus:border-transparent"
          />
        </label>
        <label htmlFor="lastName" className="text-xl font-semibold">
          Email
          <input
            type="text"
            id="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="w-full px-8 py-2 rounded
          -lg bg-gray-100 border-2 focus:outline-none
          focus:ring-2 focus:border-transparent"
          />
          <label htmlFor="lastName" className="text-xl font-semibold">
            Password
            <input
              type="text"
              id="lastName"
              name="password"
              value={form.password}
              onChange={handleInputChange}
              placeholder="password"
              className="w-full px-8 py-2 rounded
          -lg bg-gray-100 border-2 focus:outline-none
          focus:ring-2 focus:border-transparent"
            />
          </label>
        </label>
        <div className="flex justify-start">
          <button
            type="submit"
            className="px-6 py-2 text-white
            bg-blue-500 rounded-md hover:bg-blue-600
            transition duration-200 ease-in-out"
          >
            Add Employee
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddEmployee