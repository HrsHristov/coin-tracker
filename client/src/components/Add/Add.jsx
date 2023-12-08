import { useState, useEffect, useContext } from "react";

import useForm from "../../hooks/useForm";
import * as coinsService from "../../services/coinsService";
import AuthContext from "../../contexts/authContext";

import Button from "../Button/Button";
import Input from "../Input/Input";
import Select from "../Select/Select";
import Label from "../Label/Label";
import Form from "../Form/Form";

const AddFormKeys = {
    type: "type",
    Uuid: "uuid",
    Quantity: "quantity",
    Price: "price",
    Note: "note",
};

const Add = () => {
    const { addEntrySubmitHandler } = useContext(AuthContext);
    const [coins, setCoins] = useState([]);
    const { values, onChange, onSubmit } = useForm(addEntrySubmitHandler, {
        [AddFormKeys.type]: "",
        [AddFormKeys.Quantity]: "",
        [AddFormKeys.Price]: "",
        [AddFormKeys.Note]: "",
    });

    useEffect(() => {
        coinsService
            .getAll()
            .then((result) => setCoins(result))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="container container--sm my-5">
            <Form onSubmit={onSubmit} title="Add Transaction">
                <Label htmlFor="select">Type:</Label>
                <select
                    name={AddFormKeys.type}
                    id={AddFormKeys.type}
                    onChange={onChange}
                    className="form-group__select"
                >
                    <option value="">Select operation...</option>
                    <option value="Buy">Buy</option>
                    <option value="Sell">Sell</option>
                </select>

                <Select
                    labelName="Select"
                    type="select"
                    name={AddFormKeys.Uuid}
                    id={AddFormKeys.Uuid}
                    data={coins}
                    onChange={onChange}
                />

                <Input
                    labelName="Quantity"
                    type="number"
                    name={AddFormKeys.Quantity}
                    id={AddFormKeys.Quantity}
                    placeholder="0"
                    value={values[AddFormKeys.Quantity]}
                    onChange={onChange}
                />

                <Input
                    labelName="Price"
                    type="text"
                    name={AddFormKeys.Price}
                    id={AddFormKeys.Price}
                    placeholder="0.00"
                    value={values[AddFormKeys.Price]}
                    onChange={onChange}
                />

                <Input
                    labelName="Note"
                    type="text"
                    name={AddFormKeys.Note}
                    placeholder="Write your note here..."
                    id={AddFormKeys.Note}
                    value={values[AddFormKeys.Note]}
                    onChange={onChange}
                />

                <div className="d-flex gap-4 form-group">
                    <Button primary block>
                        Add Transaction
                    </Button>
                    <Button block>Cancel</Button>
                </div>
            </Form>
        </div>
    );
};

export default Add;
