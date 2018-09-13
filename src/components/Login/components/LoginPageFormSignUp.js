import React, {PureComponent} from 'react';
import LoginFormWrapper from '../styled/LoginFormWrapper';
import LoginFormSignUp from '../styled/LoginFormSignUp';
import LoginFormBox from '../styled/LoginFormBox';
import LoginFormInput from '../styled/LoginFormInput';
import LoginFormButton from '../styled/LoginFormButton';


class LoginPageFormSignUp extends PureComponent {
    render(){
        return (
        
            <div>
                {
                    this.props.showForm?
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
                        : ""
                }
            </div>
        
        );
    }
}

export default LoginPageFormSignUp;