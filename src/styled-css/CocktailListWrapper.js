import styled from "styled-components";

const CocktailListWrapper = styled.nav`
  background-color: var(--white);
  width:var(--view-width);
max-width:var(--max-width);
margin:0 auto;
padding:1.5rem 12rem;
   display:grid;
   grid-template-columns:repeat(auto-fill,minmax(300px,1fr));
   gap:2rem
`;

export default CocktailListWrapper;
