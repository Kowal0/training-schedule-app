import React, { PureComponent } from 'react';

import RotaPageStyle from '../styled/RotaPage';

export class RotaPage extends PureComponent {

    render() {
        const style = {margin: "0 auto"}

        return (
            <RotaPageStyle>
                <h1 style={style}>RotaPage</h1>

            </RotaPageStyle>
        );
    }
}