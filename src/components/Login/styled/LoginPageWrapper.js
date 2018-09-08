import styled from 'styled-components';
import myImage from '../assets/img1.png';

export const LoginPageWrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-itmes: center;
    position: relative;
    background: url(${myImage}) no-repeat bottom center fixed;
    background-size: cover;
    overflow: hidden;
    filter: grayscale(90%);
    opacity:0.8;
`;

export default LoginPageWrapper;