
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
    grid-column-gap: 1em;
  }
  @media (min-width: 1024px) {
    grid-auto-flow: column;
    grid-template-columns: repeat(5, auto [column-start]);
    grid-row-gap: 0;
  }

` 
export const DriverItem = styled.div`
  background-color: #fff;
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
  & > span {
    margin-left: 2px;
    line-height: 22px;
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
`
export const DriverPagination = styled.section`
  padding: 1em;
  text-align: center;
  margin-top: 1em;
  @media (min-width: 768px) {
    padding: 2em;
  }
` 