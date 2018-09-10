import React, {PureComponent} from 'react';
import LoginPageForm from './LoginPageForm';
import PageHeading from './PageHeading';

import LoginPageWrapper from '../styled/LoginPageWrapper';
// import PageMainHeading from '../styled/PageMainHeading';
// import PageSubHeading from '../styled/PageSubHeading';
// import PageHeadingButton from '../styled/PageHeadingButton';

export class LoginPage extends PureComponent {
    render(){
        return (
            <LoginPageWrapper>
                <PageHeading/>
                <LoginPageForm/>
            </LoginPageWrapper>
        );
    }
}