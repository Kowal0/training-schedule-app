import React, {PureComponent} from 'react';
import PageNavbarWrapper from '../styled/PageNavbarWrapper';
import PageNavbarLogo from '../styled/PageNavbarLogo'; 
import PageNavbarDot from '../styled/PageNavbarDot';



class PageNavbar extends PureComponent {
    render(){
        return (
            <PageNavbarWrapper>
                <PageNavbarLogo>
                    FitHabit
                    <PageNavbarDot>
                        &#8228; 
                    </PageNavbarDot>
                </PageNavbarLogo>
            </PageNavbarWrapper>
        );
    }
}

export default PageNavbar;