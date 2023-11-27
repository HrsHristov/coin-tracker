import Button from "../Button/Button";
import ModalWrapper from "../Modals/ModalWrapper";

import reactImg from "../../assets/react-core-concepts.png";

export default function Register() {
    return (
        <ModalWrapper title="Register">
            <form>
                <div className="header_logo">
                    <img src={reactImg} alt="CoinTrack's logo" />
                </div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="maria@email.com"
                    // onChange={onChange}
                    // value={values[RegisterFormKeys.Email]}
                />

                <label htmlFor="pass">Password:</label>
                <input
                    type="password"
                    name="password"
                    id="register-password"
                    // onChange={onChange}
                    // value={values[RegisterFormKeys.Password]}
                />

                <label htmlFor="con-pass">Confirm Password:</label>
                <input
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    // onChange={onChange}
                    // value={values[RegisterFormKeys.ConfirmPassword]}
                />

                <Button primary>Register</Button>
            </form>
        </ModalWrapper>
    );
}
