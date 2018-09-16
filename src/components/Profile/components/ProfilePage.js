import React, { PureComponent } from 'react';

import ProfilePageStyle from '../styled/ProfilePage';

export class ProfilePage extends PureComponent {

    render() {
        const style = {margin: "0 auto"}

        return (
            <ProfilePageStyle>
                <h1 style={style}>ProfilePage</h1>

            </ProfilePageStyle>
        );
    }
}