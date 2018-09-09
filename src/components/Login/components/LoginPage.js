import React, {PureComponent} from 'react';
import LoginPageWrapper from '../styled/LoginPageWrapper';
import LoginFormWrapper from '../styled/LoginFormWrapper';
import PageHeadingWrapper from '../styled/PageHeadingWrapper';
import PageMainHeading from '../styled/PageMainHeading';
import PageSubHeading from '../styled/PageSubHeading';
import PageHeadingButton from '../styled/PageHeadingButton';

class Login extends PureComponent {
    render(){
        return (
            <LoginPageWrapper>
                <PageHeadingWrapper>
                   <PageSubHeading>
                        Welcome to FitHabit
                   </PageSubHeading>
                   <PageMainHeading>
                        Sign Up and let's start this great adventure of building healthy habits. On our gym it's gonna be easy and fun!
                   </PageMainHeading>
                   <PageHeadingButton>
                       Sign Up
                   </PageHeadingButton>
                   <PageHeadingButton>
                       Sign In
                   </PageHeadingButton>  
                </PageHeadingWrapper>
                <LoginFormWrapper>
                    <h2>Join Us!</h2>
                </LoginFormWrapper>
            </LoginPageWrapper>
        );
    }
}

export default Login;