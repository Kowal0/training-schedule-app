import styled from 'styled-components';


export const PageHeadingButton = styled.button`
    
    text-transform: uppercase;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 3px;
    outline: none;
    border: 4px solid #994008;
    border-radius: 50px;
    background: #ba4d09;
    padding: 4% 10%;
    margin-top: 6%;
    transition: all .4s ease-in-out;


    &:hover {
        color: #ba4d09;
        background-color: white;
        letter-spacing: 6px;
        cursor: pointer;
        transform: translateY(-0.4rem);
        box-shadow: 0 1rem 1rem rgba(153, 64, 8, 0.2);
        &:hover::after {
            transform: scaleX(1.4) scaleY(1.6);
            opacity: 0; }
    }

    &:active,
    &:focus {
        transform: translateY(-0.1rem);
        box-shadow: 0 0.5rem 1rem rgba(153, 64, 8, 0.2);  
    }

`;

export default PageHeadingButton;