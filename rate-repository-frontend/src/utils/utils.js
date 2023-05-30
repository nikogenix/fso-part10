import numeral from "numeral";

export const convertIntToK = (n) => {
	if (n < 1000) return n;
	else return numeral(n).format("0.0a").toUpperCase();
};
