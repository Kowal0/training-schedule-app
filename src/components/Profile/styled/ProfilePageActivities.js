import styled from 'styled-components';

export const ProfilePageActivities = styled.div`
   
    width: 70%;
    margin: 100px auto;

    display: grid;
    grid-template-rows: 150px;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 30px;


    & > * {
        background-color: lightgray;
        padding: 5px;
        color: #ba4d09;
        font-size: 22px;
        font-weight: bold;
        text-transform: uppercase;
        border-radius: 10px;

    }
`;

export default ProfilePageActivities;