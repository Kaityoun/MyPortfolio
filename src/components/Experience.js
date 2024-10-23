import React from 'react'

const Details = ({position, company, time, contact, work}) =>{
    return <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <div>
            <h3 className= 'capitalize font-bold text-2x1'>{position}&nbsp; <a> @{company}</a></h3>
            <span className='capitalize font-medium text-dark/75'>
                {time} | {contact}
            </span>
            <p className ='font=medium w-full'>
                {work}
            </p>
        </div>
    </li>
}
const Experience = () =>{
   return(
     <div className='my-64'>
        <h2 className='font-bold text-8x1 mb-32 w-full text-center'>
            Experience
        </h2>

        <div className= 'w-[75%] mx-auto relative'>
            <ul>
               <Details
               position="position"
               company="cool company"
               time="2022-2022"
               contact="123123-123"
               work="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
               />
            </ul>
        </div>
    </div>
   )
}

export default Experience