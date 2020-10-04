import styled from 'styled-components'

/* function */
const getLoadingContainerStyled = ({ mode, position }) => {
  let stylesLoading = ''
  switch(mode){
    case 'small' : stylesLoading += `
      border-top: 2px solid #fc5c64;
      border-right: 2px solid #fc5c64;
      border-bottom: 2px solid #fc5c64;
      border-left: 2px solid transparent;
      &, &:after {
        width: 12px;
        height: 12px;
      }
    `
    break
    case 'medium' : stylesLoading += `
      border-top: 3px solid #fc5c64;
      border-right: 3px solid #fc5c64;
      border-bottom: 3px solid #fc5c64;
      border-left: 3px solid transparent;
      &, &:after {
        width: 20px;
        height: 20px;
      }
    `
    break
    case 'large' : stylesLoading += `
      border-top: 4px solid #fc5c64;
      border-right: 4px solid #fc5c64;
      border-bottom: 4px solid #fc5c64;
      border-left: 4px solid transparent;
      &, &:after {
        width: 25px;
        height: 25px;
      }
    `
    break
    default:
      
    break
  }
  if(position) {
    if(position === 'left') {
      stylesLoading += `
        margin-left: 0;
        margin-right: 0;
      `
    }
  }
  return stylesLoading
}

/* component */
export const LoadingContainer = styled.div`
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  display: block;
  position: relative;
  text-indent: -9999px;
  margin: 10px auto;
  transform: translateZ(0);
  animation: load8 1.1s infinite linear;
  &, &:after {
    border-radius: 50%;
  }
  ${getLoadingContainerStyled}
`