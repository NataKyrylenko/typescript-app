import "./styles.css";
import Input from "../Input/Input";
import Button from "../Button/Button";

function LoginForm(){
    return(
        <form className="login-form">
            <h2 className="form-title">Login form</h2>
            <Input name="enter" type="text" placeholder="Enter your email" label="Email"/>
            <Input name="password" type="text" placeholder="Enter your password" label="Password"/>
            <Button/>
        </form>
        
    )

}

export default LoginForm;