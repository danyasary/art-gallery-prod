import { ShareIcon, StarIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'
import Toast from '../Common/Toast'

const Topbar = ({ post }) => {
  const [isCopied, setIsCopied] = useState(false)

  async function copyTextToClipboard() {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(location.href)
    } else {
      return document.execCommand('copy', true, location.href)
    }
  }

  const handleCopyClick = () => {
    copyTextToClipboard()
      .then(() => {
        setIsCopied(true)
        setTimeout(() => {
          setIsCopied(false)
        }, 1500)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="flex flex-row sm:flex-col items-center justify-start sm:items-start sm:justify-center gap-4 sm:gap-0">
      <div className="fixed top-0 left-0 right-0 z-40">
        {isCopied && (
          <Toast
            name="success"
            icon={
              <>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Check icon</span>
              </>
            }
            description="Link Copied"
            onClick={() => setIsCopied(false)}
          />
        )}
      </div>
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
              {Array.from({ length: post.star }, () => (
                <StarIcon className="h-5 w-5 mr-1 text-brand-primary" />
              ))}
            </div>
          </div>
          <div className="flex flex-col ">
            <p className="text-neutral-50 text-xs font-bold mb-1">Date</p>
            <p className="text-white text-base ">{post.date}</p>
          </div>
          <button
            onClick={handleCopyClick}
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
      <button className="flex sm:hidden" onClick={handleCopyClick}>
        <ShareIcon className="h-6 w-6 text-neutral-50" />
      </button>
    </div>
  )
}

export default Topbar
