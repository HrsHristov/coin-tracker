import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { string, z } from "zod";

import AuthContext from "../../contexts/authContext";

import Button from "../Button/Button";
import Input from "../Input/Input";
import Card from "../Card/Card";

const schema = z.object({
    email: string().email({ message: "Invalid email address" }),
    password: string().min(5, {
        message: "Password must be 5 or more characters long",
    }),
    confirmPassword: string().min(5, {
        message: "Password must be 5 or more characters long",
    }),
});

const RegisterFormKeys = {
    Email: "email",
    Password: "password",
    ConfirmPassword: "confirm-password",
};

const Register = () => {
    const { registerSubmitHandler } = useContext(AuthContext);
    const initialData = {
        email: "",
        password: "",
    };

    const { register, handleSubmit, formState } = useForm({
        defaultValues: initialData,
        resolver: zodResolver(schema),
    });

    const { errors } = formState;

    const onSubmit = (formValues) => {
        registerSubmitHandler(formValues);
        console.log(formValues);
    };

    return (
        <div className="container container--sm my-5">
            <Card>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Register</h1>
                    <Input
                        labelName="Email"
                        type="email"
                        name={RegisterFormKeys.Email}
                        placeholder="example@email.com"
                        id="email"
                        data={register("email")}
                    />
                    <div style={{ color: "red" }}>{errors.email?.message}</div>
                    <Input
                        labelName="Password"
                        type="password"
                        name={RegisterFormKeys.Password}
                        placeholder="Enter password"
                        id="register-password"
                        data={register("password")}
                    />
                    <div style={{ color: "red" }}>
                        {errors.password?.message}
                    </div>
                    <Input
                        labelName="Confirm Password"
                        type="password"
                        name={RegisterFormKeys.ConfirmPassword}
                        placeholder="Enter password again"
                        id="register-password"
                        data={register("password")}
                    />
                    <div style={{ color: "red" }}>
                        {errors.password?.message}
                    </div>

                    <Button primary block>
                        Register
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default Register;
