import styled, { css } from 'styled-components'
import IconNavHome from '../../../assets/images/svg/home.svg'
import IconNavHomeActive from '../../../assets/images/svg/home-red.svg'
import IconNavDriver from '../../../assets/images/svg/driver.svg'
import IconNavDriverActive from '../../../assets/images/svg/driver-red.svg'
import IconNavPickup from '../../../assets/images/svg/calendar.svg'
import IconNavPickupActive from '../../../assets/images/svg/calendar-red.svg'
import IconSearch from '../../../assets/images/svg/search.svg'
import IconAddTrans from '../../../assets/images/svg/add-white.svg'
import IconUserTrans from '../../../assets/images/svg/user-blur.svg'
import IconLeftArrow from '../../../assets/images/svg/arrow-prev.svg'
import IconLeftArrowDisable from '../../../assets/images/svg/arrow-prev-grey.svg'
import IconRightArrow from '../../../assets/images/svg/arrow-next.svg'
import IconRightArrowDisable from '../../../assets/images/svg/arrow-next-grey.svg'


/* function */
const getIconContainerStyled = ({mode, name, width, isActive, onClick}) => {
  let stylesIcon = ``
  if(mode && mode == 'nav') {
    stylesIcon += `
      font-style: normal;
      &:before{
        float: left;
        margin-right: 14px;
      }
    `
  }
  switch(name){
    case 'home' 
      : stylesIcon += `
        &:hover {
          &:before { content: url(${IconNavHomeActive}); }
        }
        &:before { content: url(${isActive ? IconNavHomeActive : IconNavHome}); }
      `
      break;
    case 'driver'
      : stylesIcon += `
        &:hover {
          &:before { content: url(${IconNavDriverActive}); }
        }
        &:before { content: url(${isActive ? IconNavDriverActive :IconNavDriver}); }
      `
      break;
    case 'pickup'
      : stylesIcon += `
        &:hover {
          &:before { content: url(${IconNavPickupActive}); }
        }
        &:before { content: url(${isActive ? IconNavPickupActive :IconNavPickup}); }
      `
      break;
    case 'search'
      : stylesIcon += `
        &:before { content: url(${IconSearch}); }
      `
      break;
    case 'add'
      : stylesIcon += `
        &:before { content: url(${IconAddTrans}); }
      `
      break;
    case 'user'
      : stylesIcon += `
        &:before { content: url(${IconUserTrans}); }
      `
      break;
    case 'right-arrow' 
      : stylesIcon += `
        &:before { content: url(${isActive ? IconRightArrow : IconRightArrowDisable}); }
      `
      break;
    case 'left-arrow' 
      : stylesIcon += `
        &:before { content: url(${isActive ? IconLeftArrow : IconLeftArrowDisable}); }
      `
      break;
    default
      : break;
  }
  if(width) stylesIcon += `
    &:before { 
      width: ${width}; 
      height: ${width};
    }
  `
  if(onClick) stylesIcon += `
    cursor: pointer;
  `
  return stylesIcon
}

/* component */
export const IconContainer = styled.i`
  ${getIconContainerStyled}
  &:before {
    display: grid;
  }
`