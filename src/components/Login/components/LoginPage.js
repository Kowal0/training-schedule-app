import React, {PureComponent} from 'react';
import LoginPageWrapper from '../styled/LoginPageWrapper';
import LoginFormWrapper from '../styled/LoginFormWrapper';
import PageHeadingWrapper from '../styled/PageHeadingWrapper';
import PageHeadingH1 from '../styled/PageHeadingH1';
import PageHeadingH3 from '../styled/PageHeadingH3';

class Login extends PureComponent {
    render(){
        return (
            <LoginPageWrapper>
                <PageHeadingWrapper>
                   <PageHeadingH3>
                        Welcome to FitHabit
                   </PageHeadingH3>
                   <PageHeadingH1>
                        Sign Up and let's start this great adventure of building healthy habits. On our gym it's gonna be easy and fun!
                   </PageHeadingH1> 
                </PageHeadingWrapper>
                <LoginFormWrapper>
                    <h2>Join Us!</h2>
                </LoginFormWrapper>
            </LoginPageWrapper>
        );
    }
}

export default Login;