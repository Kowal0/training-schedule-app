import styled from 'styled-components';

export const LoginFormButton = styled.button`
    
    text-transform: uppercase;
    border: 2px solid #BABABA;
    outline: none;
    border-radius: 150px;
    padding: 10% 15%;
    font-family: "montserrat-medium", sans-serif; 
    font-size: 18px;
    letter-spacing: 0.5px; 
    color: #D1D1D1;
    margin-top: 30px;
    background-color: #ba4d09;
    transition: all .3s;
    
    
    

    &:hover {
        background-color: #5D5D5D;
        cursor: pointer;
    }
    
`;

export default LoginFormButton;