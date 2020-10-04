
import styled from 'styled-components'

/* Function */
const getDriverItemGroupStyled = ({desktop}) => {
  let stylesMod = ''
  if(desktop) {
    stylesMod += `
      display: none;
      @media (min-width: 768px) {
        display: block;
      }
    `
  } 
  return stylesMod
}

/* Component */
export const DriverHeaderWrapper = styled.article`
  display: inline-grid;
  width: 100%;
  margin-bottom: 1em;
  padding: 1em 1.5em;
  background-color: #fff;
  grid-row-gap: 10px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 0;
  }

`
export const DriverHeaderTitlePannel = styled.div``
export const DriverHeaderTitle = styled.h2`
  margin: 0;
  color: #ff4646;
  text-transform: uppercase;
  letter-spacing: -.001em;
  line-height: 1em;
`
export const DriverHeaderSubTitle = styled.small`
  color: #596a80;
`
export const DriverHeaderActionPanel = styled.div`
  display: grid;
  grid-row-gap: 10px;
  & >button {
    text-transform: uppercase;
    height: 40px;
    margin: 0;
  }
  @media (min-width: 425px) {
    justify-self: start;
    grid-template-columns: 1fr auto;
    grid-column-gap: 5px;
    & >button {
      margin-left: 5px;
      margin-right: 5px;
    }
  }
  @media (min-width: 768px) {
    justify-self: end;
  }
`
export const DriverSearchBox = styled.div`
  position: relative;
  width: 100%;
  & i {
    position: absolute;
    top: 50%;
    left: 10px;
    margin-top: -9px;
  }
  @media (min-width: 425px) {
    width: 150px;
  }
`
export const DriverSearchInput = styled.input`
  height: 40px;
  padding-left: 30px;
`
export const DriverContentWrapper = styled.article`
  margin-top: 1em;
`
export const DriverList = styled.section`
  display: inline-grid;
  grid-row-gap: 1em;
  grid-auto-flow: row;
  width: 100%;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 1.5em;
    grid-column-gap: 1.5em;
  }
  @media (min-width: 1024px) {
    grid-auto-flow: unset;
    justify-content: space-between;
    grid-template-columns: repeat(3,[col-start] 32% [col-end]);
    grid-column-gap: unset;
  }
  @media (min-width: 1440px) {
    grid-template-columns:  repeat(5,  [col-start] 19% [col-end]);
  }
` 
export const DriverItem = styled.div`
  background-color: #fff;
  &:hover {
    box-shadow: 0 0 5px rgba(234, 68, 60, .3);
  }
  & > article {
    padding: 1em;
  }
`
export const DriverItemHeader = styled.article`
  display: grid;
  grid-template-columns: 3fr .5fr;
  border-bottom: 1px solid #cacbcf;
  line-height: 10px;
`
export const DriverItemHeaderID = styled.div`
  font-size: .875em;
  color: #596a80;
  padding: .3em 0;
  & > div, & > span {
    float: left;
    display: block;
  }
  & > span {
    padding-left: 5px;
    width: 70%;
  }
`
export const DriverItemHeaderLabel = styled.div`
  display: grid;
  justify-self: end;
`
export const DriverItemBody = styled.article`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 10px;
  @media (max-width: 767.9px) {
    grid-template-columns: 85px 1fr;
  }
`
export const DriverItemImage = styled.aside`
  padding: 1em 0;
`
export const DriverItemGroupWrapper = styled.article`
  grid-template-rows: auto;
  grid-row-gap: 1em;
  display: grid;
  padding: 1em;
  @media (min-width: 768px) {
    padding: 0;
  }
`
export const DriverItemGroup = styled.aside`
 ${getDriverItemGroupStyled}
`
export const DriverItemLabel = styled.div`
  color: #596a80;
  font-size: .8125em;
`
export const DriverItemValue = styled.div`
  font-weight: 500;
  font-size: .9375em;
  @media (min-width: 1024px) {
    > span {
      white-space: unset;
      word-break: break-word;
    }
  }
`
export const DriverPagination = styled.section`
  padding: 1em;
  text-align: center;
  margin-top: 1em;
  @media (min-width: 768px) {
    padding: 2em;
  }
` 
export const EmptyContainer = styled.div`
  color: #666;
`