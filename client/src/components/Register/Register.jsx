import Button from "../Button/Button";
import ModalWrapper from "../Modals/ModalWrapper";

import reactImg from "../../assets/react-core-concepts.png";
import Label from "../Label/Label";
import Input from "../Input/Input";
import CreateEntryModal from "../Modals/CreateEntryModal/CreateEntryModal";

export default function Register() {
    return (
        <ModalWrapper title="Register">
            <form>
                <div className="header_logo">
                    <img src={reactImg} alt="CoinTrack's logo" />
                </div>
                <Input
                    labelName="Email"
                    type="email"
                    name="email"
                    placeholder="maria@email.com"
                    id="email"
                />

                <Input
                    labelName="Password"
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    id="register-password"
                />
                <Input
                    labelName="Confirm Password"
                    type="confirm-password"
                    name="confirm-password"
                    placeholder="Enter password again"
                    id="register-password"
                />

                <Button primary>Register</Button>
            </form>
        </ModalWrapper>
    );
}
