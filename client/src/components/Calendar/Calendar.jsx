import Label from "../Label/Label";
import "./Calendar.css";

const Calendar = ({ type, name, labelName, onChange, value, ...props }) => {
    return (
        <div className="form-group">
            <Label htmlFor={type}>{labelName}:</Label>
            <input
                className="form-group__calendar"
                type={type}
                name={name}
                onChange={onChange}
                // value={value}
                {...props}
            />
        </div>
    );
};

export default Calendar;
