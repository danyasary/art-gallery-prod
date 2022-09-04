import React, { useEffect, useState } from 'react'
import StarIcon from '../../../public/icons/star.svg'
import Sticky from 'react-sticky-el'

import { ShareIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
const Sidebar = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [copySuccess, setCopySuccess] = useState('')
  const textAreaRef = useRef(null)
  const onFixedToggle = () => {
    setIsSticky(!isSticky)
  }

  async function copyToClip() {
    await navigator.clipboard.writeText(location.href)
    setCopySuccess('Copied')
  }
  return (
    <Sticky onFixedToggle={onFixedToggle}>
      <div
        className={clsx(
          'flex flex-col gap-3 transition-all',
          isSticky ? 'pt-8' : 'pt-0'
        )}
      >
        <p className="text-neutral-50 text-xs">Client</p>
        <p className="text-base mb-1">Mastermind</p>
        <div className="flex flex-col">
          <p className="text-xs text-neutral-50 mb-1">Rating from Fiverr</p>
          <div className="flex items-center">
            <StarIcon className="h-4 w-4 mr-1" />
            <p>5</p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-xs text-neutral-50 mb-1">Date</p>
          <p className="text-base">01 January 2022</p>
        </div>
        <button className="" onClick={copyToClip}>
          <ShareIcon className="h-6 w-6 text-white" />
        </button>
      </div>
    </Sticky>
  )
}

export default Sidebar
