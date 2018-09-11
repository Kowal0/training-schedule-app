import styled from 'styled-components';

export const LoginFormInput = styled.input`
   
    border: 2px solid #BABABA;
    outline: none;
    border-radius: 150px;
    padding: 10% 15%;
    font-family: "montserrat-medium", sans-serif; 
    font-size: 16px; 
    color: #5D5D5D;
    margin-bottom: 25px;
    background-color: #BABABA;
    overflow: hidden;
    flex: 1;
    align-self: center;
    transition: all .6s;
    
    &:focus,
    &:active {
      border: 2px solid #ba4d09;
    
    }

    
    
`;

export default LoginFormInput;