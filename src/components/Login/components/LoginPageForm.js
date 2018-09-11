import React, {PureComponent} from 'react';
import LoginFormWrapper from '../styled/LoginFormWrapper';
import LoginFormSignUp from '../styled/LoginFormSignUp';
import LoginFormBox from '../styled/LoginFormBox';
import LoginFormInput from '../styled/LoginFormInput';
import LoginFormButton from '../styled/LoginFormButton';




class LoginPageForm extends PureComponent {
    render(){
        return (
            <LoginFormWrapper>
                <LoginFormSignUp>
                    Sign Up
                </LoginFormSignUp>
                <LoginFormBox>
                    <LoginFormInput placeholder="Email">
                        
                    </LoginFormInput>
                    <LoginFormInput placeholder="Password">
                        
                    </LoginFormInput>
                    <LoginFormButton>
                        Login
                    </LoginFormButton>
                </LoginFormBox>
            </LoginFormWrapper>
        );
    }
}

export default LoginPageForm;