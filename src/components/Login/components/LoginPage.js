import React, {PureComponent} from 'react';
import LoginPageForm from './LoginPageForm';
import PageHeading from './PageHeading';
import LoginPageWrapper from '../styled/LoginPageWrapper';


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