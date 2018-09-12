import React, {PureComponent} from 'react';

import PageHeadingWrapper from '../styled/PageHeadingWrapper';
import PageMainHeading from '../styled/PageMainHeading';
import PageSubHeading from '../styled/PageSubHeading';
import PageHeadingButton from '../styled/PageHeadingButton';

class PageHeading extends PureComponent {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('lol')
    }
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
            <PageHeadingButton onClick={this.handleClick}>
                Sign In
            </PageHeadingButton>
        </PageHeadingWrapper>
               
        );
    }
}

export default PageHeading;