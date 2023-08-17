import React from 'react'
// import Logo from '../assets/Logo.jpg'
import {BiCartAlt,BiUser} from 'react-icons/bi'
import IconCta from './IconCta'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import {useNavigate} from "react-router-dom"

function Header() {
  const navigate=useNavigate()
  return (
    <div id="application-header" className='application-header'>
      <div id='branding' className='branding'>
        <RestaurantMenuIcon sx={{fontSize:50}}/>
        {/* <img src={Logo} alt='HappyTummy'/> */}
        <p>HappyTummy</p>
      </div>
      <div id='nav-options' className='branding'>
        <IconCta Icon={BiCartAlt} onClick={()=>{navigate('/cart')}}/>
        <IconCta Icon={BiUser}/>
      </div>
      </div>
  )
}

export default Header