import { useContext } from "react";
import AuthContext from "../../contexts/authContext";

import useForm from "../../hooks/useForm";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Card from "../Card/Card";

const RegisterFormKeys = {
    Email: "email",
    Password: "password",
    ConfirmPassword: "confirm-password",
};

const Register = () => {
    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [RegisterFormKeys.Email]: "",
        [RegisterFormKeys.Password]: "",
        [RegisterFormKeys.ConfirmPassword]: "",
    });

    return (
        <div className="container container--sm my-5">
            <Card>
                <form onSubmit={onSubmit}>
                    <h1>Register</h1>
                    <Input
                        labelName="Email"
                        type="email"
                        name={RegisterFormKeys.Email}
                        placeholder="maria@email.com"
                        id="email"
                        value={values[RegisterFormKeys.Email]}
                        onChange={onChange}
                    />

                    <Input
                        labelName="Password"
                        type="password"
                        name={RegisterFormKeys.Password}
                        placeholder="Enter password"
                        id="register-password"
                        value={values[RegisterFormKeys.Password]}
                        onChange={onChange}
                    />
                    <Input
                        labelName="Confirm Password"
                        type="password"
                        name={RegisterFormKeys.ConfirmPassword}
                        placeholder="Enter password again"
                        id="register-password"
                        value={values[RegisterFormKeys.ConfirmPassword]}
                        onChange={onChange}
                    />

                    <div className="form-group">
                        <Button primary block>
                            Register
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default Register;
