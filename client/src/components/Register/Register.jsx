import { useContext } from "react";
import AuthContext from "../../Contexts/authContext";

import useForm from "../../hooks/useForm";
import Button from "../Button/Button";
import Input from "../Input/Input";

import reactImg from "../../assets/react-core-concepts.png";
import Card from "../Card/Card";

const RegisterFormKeys = {
    Email: "email",
    Password: "password",
    ConfirmPassword: "confirm-password",
};

export default function Register() {
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
                    <div className="header_logo">
                        <img src={reactImg} alt="CoinTrack's logo" />
                    </div>
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

                    <Button primary>Register</Button>
                </form>
            </Card>
        </div>
    );
}
