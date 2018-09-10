import styled from 'styled-components';
import myImage from '../assets/img1.jpg';

export const LoginPageWrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    justify-content: space-between;
    background-image: linear-gradient(
        to right bottom,
        rgba(11,12,12, 0.9),
        rgba(59,60,60, 0.8) ),
        url(${myImage});
    // background: no-repeat bottom center fixed;
    background-size: cover;
    overflow: hidden;
    filter: grayscale(90%);
    opacity: 0.7;
    
`;

export default LoginPageWrapper;