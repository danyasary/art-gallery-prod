import { ShareIcon, StarIcon } from '@heroicons/react/solid'
import React from 'react'

const Topbar = () => {
  return (
    <div className="flex flex-row sm:flex-col items-center justify-start sm:items-start sm:justify-center gap-4 sm:gap-0">
      <h1 className="hidden sm:block text-xl font-sf-pro mb-8 font-bold">
        Dark Art
      </h1>
      <div className="hidden sm:flex flex-col">
        <div className="flex gap-10">
          <div className="flex flex-col ">
            <p className="text-neutral-50 text-xs font-bold mb-2">Client</p>
            <p className="text-white text-base">Mastermind</p>
          </div>
          <div className="flex flex-col ">
            <p className="text-neutral-50 text-xs font-bold mb-2">
              Rating from Fiverr
            </p>
            <div className="flex">
              <StarIcon className="h-5 w-5 mr-1 text-brand-primary" />
              <p className="text-white text-base">5</p>
            </div>
          </div>
          <div className="flex flex-col ">
            <p className="text-neutral-50 text-xs font-bold mb-1">Date</p>
            <p className="text-white text-base">01 January 2022</p>
          </div>
          <button>
            <ShareIcon className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
      <div className="flex sm:hidden gap-3">
        <p className="text-neutral-50 text-xs">Mastermind</p>
        <div className="flex items-center">
          <StarIcon className="h-4 w-4 mr-1 text-brand-primary" />
          <p className="text-neutral-50 text-xs">5</p>
        </div>
        <p className="text-neutral-50 text-xs">01 January 2022</p>
      </div>
      <button className="flex sm:hidden">
        <ShareIcon className="h-6 w-6 text-neutral-50" />
      </button>
    </div>
  )
}

export default Topbar
