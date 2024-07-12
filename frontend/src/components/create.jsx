import React, { useState } from "react";
import { Link } from "react-router-dom";
import Image from "/assets/mern.png";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const addUser = { name, email, age };
    const response = await fetch("http://localhost:5000/", {
      method: "POST",
      body: JSON.stringify(addUser),
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }
    if (response.ok) {
      setError("");
      setName("");
      setEmail("");
      setAge(0);
      navigate("/read");
    }
  };
  return (
    <section className="flex justify-center h-screen w-full flex-col">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mx-auto">
          <img className="w-[18rem]" src={Image} alt="MERN Stack" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#439945]">
            Create the Post
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your age"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="current-name"
                  required
                  className="block w-full pl-2 rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="current-email"
                  className="block w-full pl-2 rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="age"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Age
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="age"
                  name="age"
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                  placeholder="0"
                  autoComplete="current-age"
                  className="block w-full pl-2 rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#00d8ff] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#00d8ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Create
              </button>
              <Link to={"/read"}>
                <button
                  type="button"
                  className="flex w-full mt-4 justify-center rounded-md bg-[#00d8ff] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#00d8ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Read the table
                </button>
              </Link>
              {error && (
                <>
                  {error !== 0 && (
                    <div className="text-center flex justify-center w-full mt-5">
                      <div
                        className="flex justify-center items-center w-full p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                        role="alert"
                      >
                        <svg
                          className="flex-shrink-0 inline w-4 h-4 me-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <div>
                          <span>{error}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Create;