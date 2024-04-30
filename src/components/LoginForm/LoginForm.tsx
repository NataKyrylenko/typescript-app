import Input from "components/Input/Input";
import Button from "components/Button/Button";
import { LoginFormComponent, LoginFormTitle } from "./styles";
import { useFormik } from "formik";
import { LoginFormValues } from "./types";

function LoginForm() {
    const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
        } as LoginFormValues,
        onSubmit: (values: LoginFormValues) => {
          console.log(values);
        },
      });
  console.log(formik);

  return (
    <LoginFormComponent onSubmit={formik.handleSubmit}>
      <LoginFormTitle>Login form</LoginFormTitle>
      <Input
        name="email"
        type="email"
        placeholder="Enter your email"
        label="Email"
        onInputChange={formik.handleChange}
        value={formik.values.email}
      />
      <Input
        name="password"
        type="text"
        placeholder="Enter your password"
        label="Password"
        onInputChange={formik.handleChange}
        value={formik.values.password}
      />
      <Button type="submit" name="Login" />
    </LoginFormComponent>
  );
}

export default LoginForm;
