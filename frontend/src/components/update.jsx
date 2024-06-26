import React from "react";
import { Link } from "react-router-dom";
import Image from "/assets/mern.png";

const Update = () => {
  return (
    <section className="flex justify-center h-[85vh] w-full flex-col">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mx-auto">
          <img className="w-[20rem]" src={Image} alt="MERN Stack" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#439945]">
            Update the Post
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
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
                  type="type"
                  autoComplete="name"
                  required
                  className="block w-full pl-2 rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
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
                  required
                  autoComplete="current-email"
                  className="block w-full pl-2 rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#00d8ff] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm"
              >
                Update
              </button>
              <Link to={"/read"}>
                <button
                  type="button"
                  className="flex w-full mt-4 justify-center rounded-md bg-[#00d8ff] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm"
                >
                  Back to the table
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Update;