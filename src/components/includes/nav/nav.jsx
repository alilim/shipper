import React from 'react'
import { useLocation } from 'react-router-dom'
import IconComponent from '../../../components/ui/icon/icon.component'
import { NavContainer, NavList, NavItem, NavLink } from './nav.styles'

const NavInclude = ({evToggleNavMobile, isOpenNavMobile}) => {
  const location = useLocation()
  return (
    <NavContainer isOpenNavMobile={isOpenNavMobile}>
      <IconComponent name='close' width='1.5em' onClick={evToggleNavMobile}/>
      <NavList>
        <NavItem active={location.pathname === '/home' ? true : false} >
          <NavLink as='a' href='https://shipper.id/' target='_blank' >
            <IconComponent mode='nav' name='home' width='1.2em' isActive={location.pathname === '/home' ? true : false}>Beranda</IconComponent>
          </NavLink>
        </NavItem>
        <NavItem active={location.pathname === '/' ? true : false} >
          <NavLink to='/'>
            <IconComponent mode='nav' name='driver' width='1.2em' isActive={location.pathname === '/' ? true : false}>Driver Management</IconComponent>
          </NavLink>
        </NavItem>
        <NavItem active={location.pathname === '/pickup' ? true : false} >
          <NavLink as='a' href='https://shipper.id/' target='_blank'>
            <IconComponent mode='nav' name='pickup' width='1.2em' isActive={location.pathname === '/pickup' ? true : false}>Pickup</IconComponent>
          </NavLink>
        </NavItem>
      </NavList>
    </NavContainer>
  )
}

export default NavInclude