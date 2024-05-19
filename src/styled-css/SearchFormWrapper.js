import styled from "styled-components";

const Wrapper = styled.div`
width:50%;
max-width:var(--max-width);
margin:20px auto;
padding:2rem 12rem;
box-shadow:0px 10px 10px #efe2e2;
background-color:white;
text-align:center;

input[type="search"] {
         padding:10px;
         width:60%;
         border-radius:5px 0px 0px 5px;
         background-color:#f3ecec;
         letter-spacing:1px;
         font-weight:500;
         border: 1px solid #ccc; 
         transition: border-color 0.3s, box-shadow 0.3s; 
       }
       
       input[type="search"]:focus {
         border-color: #2fe7a5; /* Change the border color when focused */
         box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* Add a subtle shadow */
         outline: none; /* Remove the default outline */
       }
button{
    padding:10px;
         width:20%;
         font-weight:500;
         color:white;
         letter-spacing:1px;
         border-radius:0px 5px 5px 0px;
         background-color:#2fe7a5;
         border: 1px solid #ccc; 
         transition: border-color 0.3s, box-shadow 0.3s; 
}
`;

export default Wrapper;