import Card from "../Card/Card";

const Form = ({ onSubmit, title, children }) => {
    return (
        <Card>
            <form onSubmit={onSubmit}>
                <h1>{title}</h1>
                {children}
            </form>
        </Card>
    );
};

export default Form;
