import styled from 'styled-components';
import myImage from './img/img1.png';

export const LoginPageWrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    background-color: tomato;
    justify-content: center;
    align-itmes: center;
    position: relative;
    background-image: url(${myImage});
`;

export default LoginPageWrapper;