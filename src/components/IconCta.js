import React from 'react'

function IconCta({Icon,onClick=(e)=>{}}) {
  return (
    <div className='icon-cta' role='button' onClick={onClick}>
        <Icon/>
    </div>
  )
}

export default IconCta