import Label from "../Label/Label";
import "./Calendar.css";

const Calendar = ({ type, name, labelName, placeholder, ...props }) => {
    return (
        <div className="form-group">
            <Label htmlFor={type}>{labelName}:</Label>
            <input
                className="form-group__calendar"
                type={type}
                name={name}
                placeholder={placeholder}
                {...props}
                // onChange={onChange}
                // value={values[LoginFormKeys.Email]}
            />
        </div>
    );
};

export default Calendar;
