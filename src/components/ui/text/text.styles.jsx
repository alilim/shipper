import styled, { css } from 'styled-components'

/* Styles */
const elipsisStyle = css `
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
  width: auto;
`

/* Functions */
const getTextModifiedStyled = ({color, fontWeight, fontSize, elipsis, inline}) => {
  let StyleText = ``
  if(color) StyleText += `color: ${color};`
  if(fontWeight) StyleText += `font-weight: ${fontWeight};`
  if(fontSize) StyleText += `font-size: ${fontSize};`

  if(inline) StyleText += `display: inline;`
  else StyleText += `display: block;`
  if(elipsis) StyleText += `${elipsisStyle}`
  return StyleText;
}

/* component */
export const TextContainer = styled.span`
  display: grid;
  ${getTextModifiedStyled}
`
