import styled from 'styled-components';


export const ProfilePageActivitiesCell = styled.div`
    background-image: url(${props => props.backgroundPicture});
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    
`;

export default ProfilePageActivitiesCell;