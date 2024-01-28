import React, { useState } from 'react'
import axios from 'axios'

const LoginEmployee = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const [resMessage, setResMessage] = useState('')

  const handleChange = e => setForm({ ...form, [e.target.name]: e
    .target.value })
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:3001/login",{
        email: form.email,
        password : form.password
      });
      console.log(res);
      setResMessage(res.data)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className=" flex justify-center items-center">
      <h1>{resMessage}</h1>
      <form
        className="flex flex-col gap-4 w-[300px] justify-center items-center"
        onSubmit={handleSubmit}
      >
        <label htmlFor="lastName" className="text-xl font-semibold">
          Email
          <input
            type="text"
            id="lastName"
            name="email"
            value={form.email}
            onChange={handleChange}
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
              onChange={handleChange}
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

export default LoginEmployee