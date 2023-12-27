import React from "react";
import "./landing_page.css";

function Landing() {
  return (
    <div className="land">
      <div className="h-screen flex flex-col items-center justify-center p-6  rounded-lg ">
        <a href="#">
          <h5 className="mb-12 text-8xl font-bold tracking-tight text-gray-900 dark:text-white">
            Rastriya Kawach
          </h5>
        </a>
        <p className="mb-12 text-3xl font-normal text-gray-700 dark:text-gray-400">
          From ink-stained pages to chain of blocks, your rights secured.
        </p>
        <a
          href="/login"
          className="inline-flex items-center px-3 py-2 text-1xl font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Know more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
export default Landing;
