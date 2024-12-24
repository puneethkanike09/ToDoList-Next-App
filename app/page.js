"use client";

import Todo from "@/components/Todo";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Home() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const [todoData, setTodoData] = useState([]);
  const [loading, setLoading] = useState({ add: false, delete: null, complete: null, fetch: true });

  const fetchTodo = async () => {
    setLoading((prev) => ({ ...prev, fetch: true }));
    try {
      const data = await axios.get("/api");
      setTodoData(data.data.todos);
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading((prev) => ({ ...prev, fetch: false }));
    }
  };

  const deleteTodo = async (id) => {
    setLoading((prev) => ({ ...prev, delete: id }));
    try {
      const data = await axios.delete(`/api`, {
        params: { mongoId: id },
      });
      toast.success(data.data.message);
      fetchTodo();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading((prev) => ({ ...prev, delete: null }));
    }
  };

  const completeTodo = async (id) => {
    setLoading((prev) => ({ ...prev, complete: id }));
    try {
      const data = await axios.put(`/api`, {}, {
        params: { mongoId: id },
      });
      toast.success(data.data.message);
      fetchTodo();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading((prev) => ({ ...prev, complete: null }));
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading((prev) => ({ ...prev, add: true }));
    try {
      const data = await axios.post("/api", formData);
      toast.success(data.data.message);
      setFormData({
        title: "",
        description: "",
      });
      fetchTodo();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading((prev) => ({ ...prev, add: false }));
    }
  };

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
          className="px-3 py-2 border-2 w-full"
          required
        />
        <textarea
          onChange={onChangeHandler}
          value={formData.description}
          name="description"
          placeholder="Enter Description"
          className="px-3 py-2 border-2 w-full"
          required
        ></textarea>
        <button type="submit" className="bg-orange-600 py-3 px-11 text-white" disabled={loading.add}>
          {loading.add ? "Adding..." : "Add Todo"}
        </button>
      </form>

      <div className="w-[90%] max-w-[800px] mt-10 mx-auto overflow-x-auto">
        {loading.fetch ? (
          <div className="text-center py-4">Loading Todos...</div>
        ) : (
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
              {todoData.map((item, index) => (
                <Todo
                  key={index}
                  id={index}
                  title={item.title}
                  description={item.description}
                  complete={item.isCompleted}
                  mongoId={item._id}
                  deleteTodo={deleteTodo}
                  completeTodo={completeTodo}
                  loading={loading}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
