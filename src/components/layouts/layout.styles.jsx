import styled from 'styled-components'

export const MainLayoutContainer = styled.section`
  display: grid;
  grid-template-areas:  'header header header header header header header header header header' 
                        'menu content content content content content content content content content'; 
`
export const ContentContainer = styled.section`
  grid-area: content;
  display: grid;
  min-height: calc(100vh - 84px);
  height: auto;
  background-color: #f6f9fb;
  padding: 2em;
`