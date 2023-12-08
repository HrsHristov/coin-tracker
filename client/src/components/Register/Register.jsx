import { useContext } from "react";
import { useForm } from "react-hook-form";
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
    confirmPassword: string().min(5, {
        message: "Password must be 5 or more characters long",
    }),
});

const RegisterFormKeys = {
    Email: "email",
    Password: "password",
    ConfirmPassword: "confirmPassword",
};

const Register = () => {
    const { registerSubmitHandler } = useContext(AuthContext);
    const initialData = {
        email: "",
        password: "",
        confirmPassword: "",
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
            <Form onSubmit={handleSubmit(onSubmit)} title="Register">
                <Input
                    labelName="Email"
                    type={RegisterFormKeys.Email}
                    name={RegisterFormKeys.Email}
                    placeholder="example@email.com"
                    id={RegisterFormKeys.Email}
                    data={register(RegisterFormKeys.Email)}
                    message={errors.email?.message}
                />
                <Input
                    labelName="Password"
                    type={RegisterFormKeys.Password}
                    name={RegisterFormKeys.Password}
                    placeholder="Enter password"
                    id={RegisterFormKeys.Password}
                    data={register(RegisterFormKeys.Password)}
                    message={errors.password?.message}
                />
                <Input
                    labelName="Confirm Password"
                    type="password"
                    name={RegisterFormKeys.ConfirmPassword}
                    placeholder="Enter password again"
                    id={RegisterFormKeys.ConfirmPassword}
                    data={register(RegisterFormKeys.ConfirmPassword)}
                    message={errors.confirmPassword?.message}
                />

                <Button primary block>
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;
