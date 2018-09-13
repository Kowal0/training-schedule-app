import React, { PureComponent } from 'react';
import LoginPageFormSignIn from './LoginPageFormSignIn';
import LoginPageFormSignUp from './LoginPageFormSignUp';
import PageContent from '../styled/PageContent';

import LoginPageWrapper from '../styled/LoginPageWrapper';
import PageMainHeading from '../styled/PageMainHeading';
import PageSubHeading from '../styled/PageSubHeading';
import PageHeadingButton from '../styled/PageHeadingButton';


export class LoginPage extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        };
    

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

        this.setState({
            isVisible: !this.state.isVisible
        });
    }

    render() {
        return (
            <LoginPageWrapper>
                <PageContent>
                    <PageSubHeading>
                        Welcome to FitHabit
                    </PageSubHeading>
                    <PageMainHeading>
                        Sign Up and let's start this great adventure of building healthy habits. On our gym it's gonna be easy and fun!
                    </PageMainHeading>
                    <PageHeadingButton onClick={this.handleClick}>
                        Sign Up
                    </PageHeadingButton >
                    <PageHeadingButton onClick={this.handleClick}>
                        Sign In
                    </PageHeadingButton>
                </PageContent>
                <LoginPageFormSignUp showForm={this.state.isVisible}/>
                <LoginPageFormSignIn showForm={this.state.isVisible}/> 

            </LoginPageWrapper>
        );
    }
}