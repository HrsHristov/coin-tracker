import { useState, useEffect, useContext } from "react";

import useForm from "../../hooks/useForm";
import * as coinsService from "../../services/coinsService";
import AuthContext from "../../contexts/authContext";

import Button from "../Button/Button";
import Input from "../Input/Input";
import Select from "../Select/Select";
import Card from "../Card/Card";
import Label from "../Label/Label";

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
            <Card>
                <form id="add-entry" onSubmit={onSubmit}>
                    <h1>Add Transaction</h1>
                    <div className="form-group">
                        <Label htmlFor="select">Type:</Label>
                        <select
                            name={AddFormKeys.type}
                            id="type"
                            onChange={onChange}
                            className="form-group__select"
                        >
                            <option value="">Select operation...</option>
                            <option value="Buy">Buy</option>
                            <option value="Sell">Sell</option>
                        </select>
                    </div>

                    <Select
                        labelName="Select"
                        type="select"
                        name={AddFormKeys.Uuid}
                        id="uuid"
                        data={coins}
                        onChange={onChange}
                    />

                    <Input
                        labelName="Quantity"
                        type="number"
                        name={AddFormKeys.Quantity}
                        id="quantity"
                        placeholder="0"
                        value={values[AddFormKeys.Quantity]}
                        onChange={onChange}
                    />

                    <Input
                        labelName="Price"
                        type="text"
                        name={AddFormKeys.Price}
                        id="Price"
                        placeholder="0.00"
                        value={values[AddFormKeys.Price]}
                        onChange={onChange}
                    />

                    <Input
                        labelName="Note"
                        type="text"
                        name={AddFormKeys.Note}
                        placeholder="Write your note here..."
                        id="note"
                        form="add-entry"
                        value={values[AddFormKeys.Note]}
                        onChange={onChange}
                    />

                    <div className="d-flex gap-4 form-group">
                        <Button primary block>
                            Add Transaction
                        </Button>
                        <Button block>Cancel</Button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default Add;
