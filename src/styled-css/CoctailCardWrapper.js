import styled from "styled-components";

const CoctailCardWrapper = styled.div`

    background-color:white;
    box-shadow: 10px 5px 5px #efe2e2;
    transition:20px grey;
    display:grid;
    grid-template-rows:auto 5fr;
    border-radius:10px;

    :hover{

        }
    

    .img{
        height:15rem;
        border-top-left-radius:10px;
        border-top-right-radius:10px;
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
