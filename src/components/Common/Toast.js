import clsx from 'clsx'
import React from 'react'

const Toast = ({ name, icon, description, onClick }) => {
  return (
    <div
      id={name}
      class="flex items-center p-4 mb-4 w-full max-w-xs text-gray-500 rounded-lg shadow mx-auto mt-10 bg-brand-quinary "
      role="alert"
    >
      <div
        class={clsx(
          'inline-flex flex-shrink-0 justify-center items-center w-8 h-8  rounded-lg ',
          name === 'success'
            ? 'text-green-500 bg-green-100'
            : 'text-red-500 bg-red-100'
        )}
      >
        {icon}
        <span class="sr-only">Check icon</span>
      </div>
      <div class="ml-3 text-sm font-normal">{description}</div>
      <button
        type="button"
        class="ml-auto -mx-1.5 -my-1.5  text-white hover:text-gray-400 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-brand-senary bg-brand-quaternary inline-flex h-8 w-8 "
        data-dismiss-target="#toast-success"
        aria-label="Close"
        onClick={onClick}
      >
        <span class="sr-only">Close</span>
        <svg
          aria-hidden="true"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  )
}

export default Toast
