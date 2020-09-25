import styled from 'styled-components'

export const Wrapper = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-rows: 0rem auto 11rem; 
  grid-template-areas: "header" "main" "footer";
  
  & footer {
    grid-area: footer;
  }

main {
  grid-area: main;
  height: 100%;
}
`