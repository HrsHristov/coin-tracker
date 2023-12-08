import { useContext } from "react";
import { useForm, useController } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { string, z } from "zod";

import AuthContext from "../../contexts/authContext";

import Button from "../Button/Button";
import Card from "../Card/Card";
import Input from "../Input/Input";

const schema = z.object({
    email: string().email({ message: "Invalid email address" }),
    password: string().min(5, {
        message: "Password must be 5 or more characters long",
    }),
});

const LoginFormKeys = {
    Email: "email",
    Password: "password",
};

const LoginTest = () => {
    const { loginSubmitHandler } = useContext(AuthContext);

    const initialData = {
        email: "",
        password: "",
    };

    const { register, control, handleSubmit, formState } = useForm({
        defaultValues: initialData,
        resolver: zodResolver(schema),
    });

    const { errors } = formState;

    const { field } = useController({ name: "num", control });

    const HandleSelectChange = (option) => {
        field.onChange(option);
    };

    const onSubmit = (formValues) => {
        loginSubmitHandler(formValues);
        // console.log(formValues);
    };

    return (
        <div className="container container--sm my-5">
            <Card>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Login</h1>
                    <Input
                        labelName="Email"
                        type="email"
                        name={LoginFormKeys.Email}
                        placeholder="example@gmail.com"
                        id="email"
                        data={register("email")}
                    />
                    <div style={{ color: "red" }}>{errors.email?.message}</div>

                    <Input
                        labelName="Password"
                        type="password"
                        name={LoginFormKeys.Password}
                        placeholder="Enter password"
                        id="password"
                        data={register("password")}
                    />
                    <div style={{ color: "red" }}>
                        {errors.password?.message}
                    </div>

                    <Button primary block>
                        Login
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default LoginTest;
