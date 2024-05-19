import styled from "styled-components";

const Wrapper = styled.div`
width:30%;
max-width:30%;
margin:0 auto;
padding:1.5rem 8rem;
background-color:white;
margin-top:5rem;
border-radius:10px;
    .form{
    font-weight:600;
    margin-top:2rem;
    text-align:left;
    align-items:center;
    letter-spacing:2px;

    input[type="text"] {
            width:100%;
            padding:10px;
            letter-spacing:2px;
            border: 2px solid #ccc; 
            border-radius: 4px; 
            transition: border-color 0.3s, box-shadow 0.3s; 
          }
          
          input[type="text"]:focus {
            border-color: #2fe7a5; /* Change the border color when focused */
            box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* Add a subtle shadow */
            outline: none; /* Remove the default outline */
          }
        input[type="email"] {
            width:100%;
            padding:10px;
            letter-spacing:2px;
            border: 2px solid #ccc; 
            border-radius: 4px; 
            transition: border-color 0.3s, box-shadow 0.3s; 
          }
          
          input[type="email"]:focus {
            border-color: #2fe7a5; /* Change the border color when focused */
            box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* Add a subtle shadow */
            outline: none; /* Remove the default outline */
          }
        .form-row{
            margin-top:1rem;
        }
        .form-input{
            margin-top:10px;
        }
        button {
            width:100%;
            padding:10px;
            color:white;
            background-color:#2fe7a5;
            border : 1px white;
            border-radius:5px;
            font-size:18px;
            letter-spacing:2px;
            margin-left:10px;

        }
}
`;

export default Wrapper;