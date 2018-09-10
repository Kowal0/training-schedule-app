import React, {PureComponent} from 'react';

import PageHeadingWrapper from '../styled/PageHeadingWrapper';
import PageMainHeading from '../styled/PageMainHeading';
import PageSubHeading from '../styled/PageSubHeading';
import PageHeadingButton from '../styled/PageHeadingButton';

class PageHeading extends PureComponent {
    render(){
        return (
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
               
        );
    }
}

export default PageHeading;