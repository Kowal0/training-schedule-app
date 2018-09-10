import styled from 'styled-components';


export const PageHeadingButton = styled.button`
    text-transform: uppercase;
    color: #fff;
    font-size: 14px;
    letter-spacing: 3px;
    outline: none;
    border: 2px solid #fff;
    background: transparent;
    padding: 3% 8%;
    margin-top: 4%;
    margin-right: 5%;
    transition: all .4s ease-in-out;

    &:hover {
        color: #4B5559;
        background-color: white;
    }
`;

export default PageHeadingButton;