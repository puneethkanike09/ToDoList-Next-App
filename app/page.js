"use client"

import Todo from "@/components/Todo";
import Image from "next/image";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

export default function Home() {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  })

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(formData)
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      //api code
      toast.success("Task Added Successfully")
    } catch (error) {
      toast.error("Something went wrong")
    }
  }
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <form onSubmit={onSubmitHandler} className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto">
        <input
          onChange={onChangeHandler}
          value={formData.title}
          type="text"
          name="title"
          placeholder="Enter Title"
          className="px-3 py-2 border-2 w-full "
        />
        <textarea
          onChange={onChangeHandler}
          value={formData.description}
          name="description"
          placeholder="Enter Description"
          className="px-3 py-2 border-2 w-full"
        ></textarea>
        <button type="submit" className="bg-orange-600 py-3 px-11 text-white">
          Add Todo
        </button>
      </form>

      <div className="w-[90%] max-w-[800px] mt-10 mx-auto overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <Todo />

          </tbody>
        </table>
      </div>
    </>
  );
}
