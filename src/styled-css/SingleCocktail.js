import styled from "styled-components";

const Wrapper = styled.div`
width:var(--view-width);
max-width:var(--max-width);
margin:0 auto;
padding:1.5rem 12rem;
text-align:center;
.img{
    border-radius:10px;
    max-width:400px;
    max-height:400px;

}
header{
    margin-bottom:2rem;
    margin-top:5rem;
    .btn{
       background-color:#2fe7a5;
       color:white;
       border-radius:6px;
       padding:10px;
       font-weight:500;
       letter-spacing:1px;
    
    }

    .link {
        text-decoration:none;

    }
}
    .singeCocktailPage {
         display:flex;
         letter-spacing:2px;
         gap:2rem;
         line-height: 2;
         font-weight:700;
         .ing{
            display:inline-block;
            margin-right:0.5rem;
       }
       p{
           font-weight:bold;
           text-transform:capitalize;
           margin-bottom :1.5rem;
   
       }
       .drink{
           font-weight:bold;
           background-color:#2fe7a5;
           padding:5px;
           color:#0f5d0f;
           border-radius:6px;
           margin-right:0.5rem;
       }
   
       .detail{
           text-align:left;
       }
    }
    
    @media (max-width:992px){
        .singeCocktailPage 
            {
                display:grid;
                grid-templte-column:2fr 3fr;
                gap:3rem;
                align-items:center;
            }
    }

    @media(min-width:623px){
        .img{
              border-radius:10px;
    max-width:400px;
    max-height:400px;
        }
    }
`;

export default Wrapper;