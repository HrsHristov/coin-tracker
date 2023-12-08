import { useContext } from "react";
import { useForm, useController } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { string, z } from "zod";

import AuthContext from "../../contexts/authContext";

import Button from "../Button/Button";
import Input from "../Input/Input";
import Form from "../Form/Form";

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
            <Form onSubmit={handleSubmit(onSubmit)} title="Login">
                <Input
                    labelName="Email"
                    type={LoginFormKeys.Email}
                    name={LoginFormKeys.Email}
                    placeholder="example@email.com"
                    id={LoginFormKeys.Email}
                    data={register(LoginFormKeys.Email)}
                    message={errors.email?.message}
                />

                <Input
                    labelName="Password"
                    type={LoginFormKeys.Password}
                    name={LoginFormKeys.Password}
                    placeholder="Enter password"
                    id={LoginFormKeys.Password}
                    data={register(LoginFormKeys.Password)}
                    message={errors.password?.message}
                />

                <Button primary block>
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default LoginTest;
