import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import * as portfolioService from "../../services/portfolioService";

import Button from "../Button/Button";
import Input from "../Input/Input";
import Label from "../Label/Label";
import Form from "../Form/Form";

import Path from "../../paths";

const EditFormKeys = {
    type: "type",
    Quantity: "quantity",
    Price: "price",
    Note: "note",
};

const Edit = () => {
    const navigate = useNavigate();
    const { _id } = useParams();
    const [entry, setEntry] = useState({
        [EditFormKeys.type]: "",
        [EditFormKeys.Quantity]: "",
        [EditFormKeys.Price]: "",
        [EditFormKeys.Note]: "",
    });

    useEffect(() => {
        portfolioService
            .getOne(_id)
            .then((result) => setEntry(result))
            .catch((err) => console.log(err));
    }, []);

    const onClick = () => {
        navigate(Path.Portfolio);
    };

    const editGameSubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        const fullValues = { ...values, uuid: entry.uuid };

        try {
            await portfolioService.edit(_id, fullValues);
            navigate(Path.Portfolio);
        } catch (err) {
            console.log(err);
        }
    };

    const onChange = (e) => {
        setEntry((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div className="container container--sm my-5">
            <Form onSubmit={editGameSubmitHandler} title="Edit Transaction">
                <div className="form-group">
                    <Label htmlFor="select">Type:</Label>
                    <select
                        name={EditFormKeys.type}
                        id={EditFormKeys.type}
                        onChange={onChange}
                        className="form-group__select"
                        value={entry.type}
                    >
                        <option value="">Select operation</option>
                        <option value="Buy">Buy</option>
                        <option value="Sell">Sell</option>
                    </select>
                </div>

                <Input
                    labelName="Quantity"
                    type="number"
                    name={EditFormKeys.Quantity}
                    placeholder="0"
                    id={EditFormKeys.Quantity}
                    value={entry.quantity}
                    onChange={onChange}
                />
                <Input
                    labelName="Price"
                    type="text"
                    name={EditFormKeys.Price}
                    placeholder="0.00"
                    id={EditFormKeys.Price}
                    value={entry.price}
                    onChange={onChange}
                />
                <Input
                    labelName="Note"
                    type="text"
                    name={EditFormKeys.Note}
                    placeholder="Write your note here..."
                    id={EditFormKeys.Note}
                    value={entry.note}
                    onChange={onChange}
                />
                <div className="d-flex gap-4 form-group">
                    <Button primary block>
                        Edit Transaction
                    </Button>
                    <Button block onClick={onClick}>
                        Cancel
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default Edit;
