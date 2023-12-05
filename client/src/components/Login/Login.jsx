import { useContext } from "react";

import AuthContext from "../../Contexts/authContext";

import Button from "../Button/Button";
import Card from "../Card/Card";
import Input from "../Input/Input";
import useForm from "../../hooks/useForm";

const LoginFormKeys = {
    Email: "email",
    Password: "password",
};

const Login = () => {
    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LoginFormKeys.Email]: "",
        [LoginFormKeys.Password]: "",
    });

    return (
        <div className="container container--sm my-5">
            <Card>
                <form onSubmit={onSubmit}>
                    <h1>Login</h1>
                    <div className="form-group">
                        <Input
                            labelName="Email"
                            type="email"
                            name={LoginFormKeys.Email}
                            placeholder="example@gmail.com"
                            id="email"
                            onChange={onChange}
                            value={values[LoginFormKeys.Email]}
                        />
                    </div>

                    <div className="form-group">
                        <Input
                            labelName="Password"
                            type="password"
                            name={LoginFormKeys.Password}
                            placeholder="Enter password"
                            id="password"
                            onChange={onChange}
                            value={values[LoginFormKeys.Password]}
                        />
                    </div>

                    <div className="form-group">
                        <Button primary block>
                            Login
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default Login;
