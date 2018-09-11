import React, {PureComponent} from 'react';
import LoginFormWrapper from '../styled/LoginFormWrapper';
import LoginFormSignUp from '../styled/LoginFormSignUp';
import LoginFormBox from '../styled/LoginFormBox';
import LoginFormInput from '../styled/LoginFormInput';



class LoginPageForm extends PureComponent {
    render(){
        return (
            <LoginFormWrapper>
                <LoginFormSignUp>
                    Sign Up
                </LoginFormSignUp>
                <LoginFormBox>
                    <LoginFormInput>
                        
                    </LoginFormInput>
                    <LoginFormInput>
                        
                    </LoginFormInput>
                </LoginFormBox>
            </LoginFormWrapper>
        );
    }
}

export default LoginPageForm;