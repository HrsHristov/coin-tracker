import Button from "../Button/Button";
import ModalWrapper from "../Modals/ModalWrapper";

export default function Login() {
    return (
        <ModalWrapper title="Login">
            <form>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@gmail.com"
                    // onChange={onChange}
                    // value={values[LoginFormKeys.Email]}
                />

                <label htmlFor="login-pass">Password:</label>
                <input
                    type="password"
                    id="login-password"
                    name="password"
                    // onChange={onChange}
                    // value={values[LoginFormKeys.Password]}
                />
                <Button primary>Login</Button>
            </form>
        </ModalWrapper>
    );
}
