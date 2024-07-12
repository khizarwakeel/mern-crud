import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Image from "/assets/mern.png";

const Read = () => {
  const [data, setData] = useState();
  const [error, setError] = useState("");

  async function getData() {
    try {
      const response = await fetch("http://localhost:5000/");
      const result = await response.json();

      if (!response.ok) {
        console.log(result.error);
        setError(result.error);
      }

      setData(result);
    } catch (error) {
      console.log(error);
    }
  }

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE",
    });

    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }
    if (response.ok) {
      getData();
      setError("Deleted Successfully");
      setTimeout(() => {
        setError("");
      }, 1000);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <section className="mt-28">
      <div className="px-6 lg:px-8">
        <div className="mx-auto">
          <div className="flex justify-center">
            <img className="w-[20rem]" src={Image} alt="MERN Stack" />
          </div>
          <h2 className="my-5 text-center text-2xl font-bold leading-9 tracking-tight text-[#439945]">
            Read the Post
          </h2>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-4xl md:mx-auto mx-5">
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
            {data?.map((data, index) => (
              <tr
                key={data?._id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{data?.name}</td>
                <td className="px-6 py-4">{data?.email}</td>
                <td className="px-6 py-4">{data?.age}</td>
                <td className="px-6 py-4">
                  <Link to={`/${data._id}`}>
                    <button className="bg-green-800 px-7 py-1 text-white">
                      Edit
                    </button>
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDelete(data._id)}
                    className="bg-red-700 px-5 py-1 text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
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
      {error && (
        <>
          {error !== 0 && (
            <div className="text-center flex justify-center w-full mt-4 mb-7 max-w-4xl mx-auto">
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
    </section>
  );
};

export default Read;