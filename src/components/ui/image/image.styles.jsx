import styled, { css } from 'styled-components'

/* function */
const getImageContainerStyled = ({width, height, mobileWidth, mobileHeight}) => {
  let stylesMod = ``
  if(width) {
    stylesMod += `
      width: ${width};
    `
  }
  if(height) {
    stylesMod += `
      height: ${height};
    `
  }
  if(mobileWidth) {
    stylesMod += `
      @media (max-width: 767.9px){
        width: ${mobileWidth};
      }
    `
  }
  if(mobileHeight) {
    stylesMod += `
      @media (max-width: 767.9px){
        height: ${mobileHeight};
      }
    `
  }
  return stylesMod
}

const getImageCoverContainerStyled = ({coverMode, coverWidth, coverMobileWidth}) => {
  let stylesMod = ``
  if(coverMode) {
    if(coverMode === 'round') {
      stylesMod += `
        border-radius: 50%;
      `
    }
  }
  if(coverWidth) {
    stylesMod += `
      width: ${coverWidth};
      height: ${coverWidth};
    `
  }
  if(coverMobileWidth) {
    stylesMod += `
      @media (max-width: 767.9px){
        width: ${coverMobileWidth};
        height: ${coverMobileWidth};
      }
    `
  }
  return stylesMod
}

/* component */
export const ImageCoverContainer = styled.div`
  position: relative;
  overflow: hidden;
  background: #f0f0f0;
  > img {
    width: 100%;
    height: auto;
  }
  ${getImageCoverContainerStyled}
` 
export const ImageContainer = styled.img`
  width: auto;
  height: auto;
  ${getImageContainerStyled}
`