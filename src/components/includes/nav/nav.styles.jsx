import styled from 'styled-components'
import { Link } from 'react-router-dom'

/* Function */
const getNavContainerStyled = ({isOpenNavMobile}) => {
  let stylesMod = ``
  if(isOpenNavMobile) {
    stylesMod += `
      @media (max-width: 767.9px){
        top: 0;
      }
    `
  } 
  return stylesMod
}

const getNavItemStyled = ({active}) => {
  let stylesMod = ``
  if(active) {
    stylesMod += `
      border-color: #ff4646;
      & ${NavLink} {
        color: #ff4646;
        font-weight: 600;
      }
    `
  } 
  return stylesMod
}

/* Components */
export const NavContainer = styled.section`
  height: auto;
  & > i {
    margin: 1em;
  }
  @media (max-width: 767.9px){
    display: block;
    position: fixed;
    width: 100%;
    top: -100vh;
    z-index: 10;
    background: #fff;
    min-height: 100vh;
    transition: top ease-in-out .5s;
    & > i {
      display: block;
    }
  }
  @media (min-width: 768px) {
    grid-area: menu;
    display: grid;
    min-height: calc(100vh - 84px);
    margin-top: 84px;
    & > i {
      display: none;
    }
  }
  ${getNavContainerStyled}
`
export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  padding-top: 10px;
  @media (min-width: 768px) {
    padding-top: 30px;
  }
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
export const NavItem = styled.li`
  padding: .5em 1em;
  transition: all ease .3s;
  border-left: 2px solid transparent;
  @media (min-width: 768px) {
    border-bottom: 0;
  }
  ${getNavItemStyled}
`