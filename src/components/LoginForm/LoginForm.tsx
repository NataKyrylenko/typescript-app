import Input from "components/Input/Input";
import Button from "components/Button/Button";
import { LoginFormComponent, LoginFormTitle } from "./styles";


function LoginForm(){
    return(
        <LoginFormComponent>
            <LoginFormTitle>Login form</LoginFormTitle>
            <Input name="enter" type="text" placeholder="Enter your email" label="Email" />
            <Input name="password" type="text" placeholder="Enter your password" label="Password" />
            <Button name = "Login"/>
        </LoginFormComponent>
        
    )

}

export default LoginForm;