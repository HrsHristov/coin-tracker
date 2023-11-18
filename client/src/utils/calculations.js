import { formatPrice } from "./formatUtils.js";

export const calculateHoldings = (price, quanity) => {
    const holdings = formatPrice((price * quanity).toString());

    return holdings;
};

export const calculatePNL = (price, buyPrice, quanity) => {
    const priceDifferce = price - buyPrice;
    const pnl = priceDifferce * quanity;

    return formatPrice(pnl.toString());
};

export const calculatePNLPercentage = (price, buyPrice, quanity) => {
    const pnl = 100 * (price / buyPrice) - 100;

    return formatPrice(pnl.toString());
};
