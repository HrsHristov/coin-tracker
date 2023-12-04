import { useState, useEffect, useContext } from "react";

import useForm from "../../hooks/useForm";
import * as coinsService from "../../services/coinsService";
import AuthContext from "../../Contexts/authContext";

import Button from "../Button/Button";
import Input from "../Input/Input";
import Select from "../Select/Select";
import Calendar from "../Calendar/Calendar";
import Card from "../Card/Card";

const AddFormKeys = {
    TxType: "txType",
    // CoinPick: "coinPick",
    Quantity: "quantity",
    Price: "price",
    Note: "note",
    Date: "date",
};

const AddEntry = () => {
    const { addEntrySubmitHandler } = useContext(AuthContext);
    const [coins, setCoins] = useState([]);
    const { values, onChange, onSubmit } = useForm(addEntrySubmitHandler, {
        [AddFormKeys.TxType]: "buy",
        // [AddFormKeys.CoinPick]: "",
        [AddFormKeys.Quantity]: "",
        [AddFormKeys.Price]: "",
        [AddFormKeys.Note]: "",
        [AddFormKeys.Date]: new Date().toISOString().split("T")[0],
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
                        <select
                            name={AddFormKeys.TxType}
                            id="txType"
                            onChange={onChange}
                            className="form-group__select"
                        >
                            <option value="">Select operation type</option>
                            <option value="buy">Buy</option>
                            <option value="sell">Sell</option>
                        </select>
                        <Select
                            name="uuid"
                            id="uuid"
                            data={coins}
                            onChange={onChange}
                        />
                    </div>

                    <Input
                        labelName="Quantity"
                        type="number"
                        name={AddFormKeys.Quantity}
                        placeholder="0"
                        id="quantity"
                        value={values[AddFormKeys.Quantity]}
                        onChange={onChange}
                    />

                    <Input
                        labelName="Price"
                        type="text"
                        name={AddFormKeys.Price}
                        placeholder="0.00"
                        id="Price"
                        value={values[AddFormKeys.Price]}
                        onChange={onChange}
                    />

                    <Input
                        labelName="Note"
                        type="text"
                        name={AddFormKeys.Note}
                        placeholder="Write your note here..."
                        id="note"
                        value={values[AddFormKeys.Note]}
                        onChange={onChange}
                    />

                    <Calendar
                        labelName="Date"
                        type="date"
                        name="calendar"
                        placeholder="Write your note here..."
                        id="calendar"
                        value={values[AddFormKeys.Date]}
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

export default AddEntry;
