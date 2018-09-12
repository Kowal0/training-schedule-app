import React, {PureComponent} from 'react';
import LoginPageForm from './LoginPageForm';
import PageContent from './PageContent';
import LoginPageWrapper from '../styled/LoginPageWrapper';


export class LoginPage extends PureComponent {
    render(){
        return (
            <LoginPageWrapper>
                <PageContent/>
                <LoginPageForm/>
            </LoginPageWrapper>
        );
    }
}