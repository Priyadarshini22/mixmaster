import styled from "styled-components";

const CoctailCardWrapper = styled.nav`

        background-color:white;
    box-shadow:var(--shadow-2);
    transition:var(--transition);
    display:grid;
    grid-template-rows:auto 1fr;
    border-radius:var(--borderRadius);}
    :hover{
        box-shadow:var(--shadow-4);
    }
    

    img{
        height:15rem;
        border-top-left-radius:var(--borderRadius);
        border-top-right-radius:var(--borderRadius);
        object-fit:cover;
        width:100%;
    }
    .footer{
        padding:1rem;
        h4,
        h5{
            margin-bottom:0.5rem;
            letter-spacing:2px;
        }
        h4{
            font-weight:700;
            letter-spacing:2px;
        }
        p{
            color:var(--grey-500);
            letter-spacing:2px;

        }
        .link{
            text-decoration:none;

        }
        .btn{
            background-color: #46dfa8;
            color:white;
            border-radius:5px;
            padding:0.2rem 1rem;
        
    
        }
    }
`;

export default CoctailCardWrapper;
