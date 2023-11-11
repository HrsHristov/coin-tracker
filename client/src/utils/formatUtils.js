import { numericFormatter } from "react-number-format";

export const formatPrice = (price) => {
    const formattedNumber = numericFormatter(price, {
        thousandSeparator: true,
        decimalScale: 2,
    });

    return formattedNumber;
};

export const formatNumber = (number1, number2 = 1) => {
    const dividedNumber = Math.round(Number(number1 / number2));

    const formattedNumber = numericFormatter(dividedNumber.toString(), {
        thousandSeparator: true,
        decimalScale: 0,
    });

    return formattedNumber;
};
