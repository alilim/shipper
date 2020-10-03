import styled from 'styled-components'
import { Link } from 'react-router-dom'

/* Function */
const getNavItemStyled = ({active}) => {
  let stylesMod = ''
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
  grid-area: menu;
  display: grid;
  min-height: calc(100vh - 84px);
  height: auto;
`
export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
export const NavItem = styled.li`
  padding: .5em 1em;
  transition: all ease .3s;
  border-left: 2px solid transparent;
  ${getNavItemStyled}
`