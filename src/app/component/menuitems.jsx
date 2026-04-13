import React from 'react'

export default function menuitems({title,address,icon}) {
  return (
    <link href={address} className='hover:text-amber-500 '>
        <icon className="text-2xl sm:hidden"/>
        <p className='uppercase hidden sm:inline'>{title}</p>
        
        
    </link>
  )
}
 