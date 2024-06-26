import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Image from "/assets/mern.png";

const Read = () => {
  return (
    <section className="mt-28">
      <div>
        <div className="mx-auto">
          <div className="flex justify-center">
            <img className="w-[20rem]" src={Image} alt="MERN Stack" />
          </div>
          <h2 className="my-5 text-center text-2xl font-bold leading-9 tracking-tight text-[#439945]">
            Read the Post
          </h2>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-2xl md:mx-auto mx-5">
        <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Sr.No
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Age
              </th>
              <th scope="col" className="px-6 py-3">
                Edit
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">Khizar</td>
              <td className="px-6 py-4">khizar@gmail.com</td>
              <td className="px-6 py-4">24</td>
              <td className="px-6 py-4">
                <Link to={"/update"}>
                  <button className="bg-green-800 px-7 py-1 text-white">
                    Edit
                  </button>
                </Link>
              </td>
              <td className="px-6 py-4">
                <button className="bg-red-700 px-5 py-1 text-white">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-7">
        <Link to={"/"}>
          <button
            type="button"
            className="flex w-32 mb-10 justify-center rounded-md bg-[#00d8ff] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm"
          >
            Create
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Read;