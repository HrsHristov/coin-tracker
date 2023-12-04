import { useContext } from "react";

import Button from "../Button/Button";
import Card from "../Card/Card";
import Input from "../Input/Input";
import useForm from "../../hooks/useForm";
import AuthContext from "../../Contexts/authContext";

const LoginFormKeys = {
    Email: "email",
    Password: "password",
};

const Login = () => {
    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LoginFormKeys.Email]: "",
        [LoginFormKeys.Passwordassword]: "",
    });

    return (
        <div className="container container--sm my-5">
            <Card>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <Input
                            labelName="Email"
                            type="email"
                            name={LoginFormKeys.Email}
                            placeholder="example@gmail.com"
                            id="email"
                            value={values[LoginFormKeys.Email]}
                            onChange={onChange}
                        />
                    </div>

                    <div className="form-group">
                        <Input
                            labelName="Password"
                            type="password"
                            name={LoginFormKeys.Password}
                            placeholder="Enter password"
                            id="password"
                            value={values[LoginFormKeys.Password]}
                            onChange={onChange}
                        />
                    </div>

                    <div className="form-group">
                        <Button primary>Login</Button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default Login;
