import Button from "../Button/Button";
import Card from "../Card/Card";
import Input from "../Input/Input";

export default function Login() {
    return (
        <div className="container container--sm my-5">
            <Card>
                <form>
                    <div className="form-group">
                        <Input
                            labelName="Email"
                            type="email"
                            name="email"
                            placeholder="example@gmail.com"
                            id="email"
                        />
                    </div>

                    <div className="form-group">
                        <Input
                            labelName="Password"
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            id="password"
                        />
                    </div>

                    <div className="form-group">
                        <Button primary>Login</Button>
                    </div>
                </form>
            </Card>
        </div>
    );
}
