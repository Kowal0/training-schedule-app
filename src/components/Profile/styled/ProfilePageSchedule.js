import styled from 'styled-components';

export const ProfilePageSchedule = styled.div`
   
    width: 80%;
    margin: 30px auto;

    display: grid;
    grid-template-rows: 1fr 2fr 2fr;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 20px;

    & > * {
        background-color: lightgray;
        padding: 20px;
        color: #ba4d09;
        font-size: 22px;
        border-radius: 10px;
    }
`;

export default ProfilePageSchedule;