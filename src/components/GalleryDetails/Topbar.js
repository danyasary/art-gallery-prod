import { ShareIcon, StarIcon } from '@heroicons/react/solid'
import React, { useRef, useState } from 'react'

const Topbar = ({ post }) => {
  const [copySuccess, setCopySuccess] = useState('')
  const textAreaRef = useRef(null)

  async function copyToClip() {
    await navigator.clipboard.writeText(location.href)
    setCopySuccess('Copied')
  }
  return (
    <div className="flex flex-row sm:flex-col items-center justify-start sm:items-start sm:justify-center gap-4 sm:gap-0">
      <h1 className="hidden sm:block text-xl font-sf-pro mb-8 font-bold">
        {post.title}
      </h1>
      <div className="hidden sm:flex flex-col">
        <div className="flex gap-10 items-center ">
          <div className="flex flex-col ">
            <p className="text-neutral-50 text-xs font-bold mb-2">Client</p>
            <p className="text-white text-base uppercase">{post.client}</p>
          </div>
          <div className="flex flex-col ">
            <p className="text-neutral-50 text-xs font-bold mb-2">
              Rating from Fiverr
            </p>
            <div className="flex">
              <StarIcon className="h-5 w-5 mr-1 text-brand-primary" />
              <p className="text-white text-base">{post.star}</p>
            </div>
          </div>
          <div className="flex flex-col ">
            <p className="text-neutral-50 text-xs font-bold mb-1">Date</p>
            <p className="text-white text-base ">{post.date}</p>
          </div>
          <button
            onClick={copyToClip}
            className="text-white hover:text-neutral-50 active:text-neutral-50"
          >
            <ShareIcon className="h-6 w-6  " />
          </button>
        </div>
      </div>
      <div className="flex sm:hidden gap-3">
        <p className="text-neutral-50 text-xs uppercase">{post.client}</p>
        <div className="flex items-center">
          <StarIcon className="h-4 w-4 mr-1 text-brand-primary" />
          <p className="text-neutral-50 text-xs">{post.star}</p>
        </div>
        <p className="text-neutral-50 text-xs">{post.date}</p>
      </div>
      <button className="flex sm:hidden" onClick={copyToClip}>
        <ShareIcon className="h-6 w-6 text-neutral-50" />
      </button>
    </div>
  )
}

export default Topbar
