import styled from 'styled-components'

export const MainLayoutContainer = styled.section`
  display: grid;
  grid-template-areas:  'header'
                        'content'; 
  @media (min-width: 768px) {
    grid-template-areas:  'header header header header header header header header header header' 
                        'menu content content content content content content content content content'; 
  }
`
export const ContentContainer = styled.section`
  grid-area: content;
  display: grid;
  min-height: calc(100vh - 84px);
  height: auto;
  background-color: #f6f9fb;
  padding: 1em;
  margin-top: 57px;
  @media (min-width: 768px) {
    padding: 2em;
    margin-top: 84px;
  }
`