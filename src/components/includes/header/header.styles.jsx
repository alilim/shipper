import styled from 'styled-components'

/* Components */
export const HeaderContainer = styled.section`
  grid-area: header;
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  padding: 2em 1em;
  
`
export const HeaderLogoImg = styled.img`
  width: 8em;
  height: auto;
`
export const HeaderUserWrapper = styled.div`
  display: grid;
  justify-self: end;
  grid-template-columns: 1fr auto;
  grid-column-gap: 5px;
  align-items: center;
`
export const HeaderUserText = styled.div`
  font-size: 1em;
` 
export const HeaderUserAvatar = styled.div``
export const HeaderUserImg = styled.img`
  width: 1.5em;
  height: 1.5em;
`