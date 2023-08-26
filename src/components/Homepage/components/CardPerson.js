import { StarIcon } from '@heroicons/react/solid'
import React from 'react'

const CardPerson = ({
  name,
  totalStar,
  description,
  published,
  img,
  country,
  purchased,
  ...props
}) => {
  return (
    <div className="flex items-start" {...props}>
      <div className="w-6 h-6 sm:w-10 sm:h-10 lg:h-[60px] lg:w-[60px] rounded-full overflow-hidden flex-shrink-0 mr-6">
        <img
          src={img}
          className="object-cover w-full h-full"
          alt="Person Testimony"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex items-end mb-1 ">
          <p className="text-base sm:text-xl mr-3">{name}</p>
          {Array.from({ length: totalStar }, () => (
            <StarIcon className="h-4 w-4 text-brand-primary mb-[2px] mr-1" />
          ))}
        </div>
        <p className="opacity-50 text-sm sm:mb-3">{country}</p>
        <p className="text-sm mb-3">{description}</p>
        <p className="opacity-50 text-sm">Fiverr, {purchased}</p>
      </div>
    </div>
  )
}

export default CardPerson
