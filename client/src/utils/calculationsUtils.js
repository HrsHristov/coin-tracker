import { formatPrice } from "./formatUtils";

export const calculateHoldings = (price, quanity) => {
    const holdings = formatPrice((price * quanity).toString());

    return holdings;
};

export const calculatePNL = (price, buyPrice, quanity) => {
    const priceDifferce = price - buyPrice;
    const pnl = priceDifferce * quanity;

    return formatPrice(pnl.toString());
};

export const calculatePNLPercentage = (price, buyPrice) => {
    const pnl = 100 * (price / buyPrice) - 100;

    return formatPrice(pnl.toString());
};
