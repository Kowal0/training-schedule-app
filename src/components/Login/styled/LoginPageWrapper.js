import styled from 'styled-components';
import myImage from '../assets/img1.jpg';

export const LoginPageWrapper = styled.div`
    display: flex;
    position: relative;
    height: calc(100vh - 60px);
    width: 100%;
    justify-content: space-between;
    
    background: no-repeat bottom center fixed;
    background-image: linear-gradient(
        to right bottom,
        rgba(11,12,12, 0.9),
        rgba(59,60,60, 0.8) ),
        url(${myImage});
    background-size: cover;
    overflow: hidden;
    
`;

export default LoginPageWrapper;