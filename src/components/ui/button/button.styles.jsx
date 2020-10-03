import styled, { css } from 'styled-components'

/* style */
const GlobalButtonStyles = css`
  display: inline-grid;
  cursor: pointer;
  border: 0;
  border-radius: 3px;
  margin-left: 5px;
  margin-right: 5px;
  outline: none;
  background-color: transparent;
  position: relative;
  align-items: center;
  font-weight: bold;
  padding-left: .725em;
  padding-right: .725em;
  
`

/* function */
const getButtonModifiedStyled = ({mode, inlineSvg}) => {
  let modifiedStyled = ``
  if(mode){
    if(mode == 'redBigDefault') {
      modifiedStyled += `
        background-color: #ff453b;
        color: #FFF;
        font-size: .825em;
        &:hover {
          box-shadow: 0 0 2px rgba(234, 68, 60, .5);
        }
      `
    }else if(mode == 'transparent') {
      modifiedStyled += `
        background-color: transparent;
        font-weight: 400;
      `
    }
  }
  if(inlineSvg) {
    modifiedStyled += `
      position: relative;
      padding-left: 2em;
      & i {
        position: absolute; 
        left: .725em;
        top: 50%;
        margin-top: -6px;
      }
    `
    if(inlineSvg == 'right') {
      modifiedStyled += `
        padding-right: 2em;
        & i {
          left: auto;
          right: .725em;
        }
      `  
    }
  }
  return modifiedStyled
}


/* component */
export const ButtonContainer = styled.button.attrs(props => ({
    type: (props.type) ? props.type : 'button' 
  }))`
  ${GlobalButtonStyles}
  ${getButtonModifiedStyled}
`