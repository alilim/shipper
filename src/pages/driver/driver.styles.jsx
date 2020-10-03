
import styled from 'styled-components'

export const DriverHeaderWrapper = styled.article`
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  margin-bottom: 1em;
  padding: 1em 1.5em;
  background-color: #fff;
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
  justify-self: end;
  grid-template-columns: 1fr auto;
  grid-column-gap: 5px;
  & >button {
    text-transform: uppercase;
    height: 40px;
  }
`
export const DriverSearchBox = styled.div`
  position: relative;
  width: 150px;
  & i {
    position: absolute;
    top: 50%;
    left: 10px;
    margin-top: -9px;
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
  width: 100%;
  grid-template-columns: repeat(5, auto [column-start]);
  grid-column-gap: 1em;
` 
export const DriverItem = styled.div`
  background-color: #fff;
  & article {
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
`
export const DriverItemImage = styled.aside`
  padding: 1em 0;
`
export const DriverItemLabel = styled.div`
  color: #596a80;
  font-size: .8125em;
`
export const DriverItemValue = styled.div`
  font-weight: 500;
`
export const DriverPagination = styled.section`
  padding: 2em;
  text-align: center;
  margin-top: 1em;
` 