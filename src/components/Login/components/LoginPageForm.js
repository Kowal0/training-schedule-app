import React, {PureComponent} from 'react';
import LoginFormWrapper from '../styled/LoginFormWrapper';
import LoginFormSignUp from '../styled/LoginFormSignUp';

class LoginPageForm extends PureComponent {
    render(){
        return (
            <LoginFormWrapper>
                <LoginFormSignUp>
                    Join Us
                </LoginFormSignUp>
            </LoginFormWrapper>
        );
    }
}

export default LoginPageForm;