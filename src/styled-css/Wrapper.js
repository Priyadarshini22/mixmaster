import styled from "styled-components";

const Wrapper = styled.nav`
background-color: var(--white);
.nav-center{
    width:var(--view-width);
    max-width:var(--max-width);
    margin:0 auto;
    display:flex;
    flex-direction:column;
    padding:1.5rem 12rem;

}

.errorPage {
    color:grey;
    font-size:1.5rem;
    text-align:center;
}

.btn{
    text-decoration:none;
    color: #46dfa8;
}
p{
    color:grey;
    line-height:2;
}
.logo{
    font-size:2rem;
    font-weight:bold;
    color: #46dfa8;
    letter-spacing:2px;

}
.nav-links{
    display:flex;
    flex-direction:column;
    gap:2rem;
    margin-top:1rem;

}  
.nav-link{
    text-decoration:none;
    transition:var(--transition);
    color:var(--grey-900);
    padding:0.5rem 0.5rem 0.5rem 0;
    letter-spacing:2px;
    font-weight:500;
}     
.nav-link:hover{
    color: #46dfa8;
}  

@media (min-width:728px) {
    .nav-center{
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    }
   .nav-links{ 
    flex-direction:row;
    margin-top:0;
   }
}`;

export default Wrapper;