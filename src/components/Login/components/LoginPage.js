import React, { PureComponent } from 'react';
import PageContent from '../styled/PageContent';

import LoginPageWrapper from '../styled/LoginPageWrapper';
import PageMainHeading from '../styled/PageMainHeading';
import PageSubHeading from '../styled/PageSubHeading';
import PageHeadingButton from '../styled/PageHeadingButton';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom';


export class LoginPage extends PureComponent {


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
                    <Link to={process.env.PUBLIC_URL + "/profile"}>
                        <PageHeadingButton>
                            Get Started 
                        </PageHeadingButton>
                    </Link>
                </PageContent>
            </LoginPageWrapper>
        );
    }
}