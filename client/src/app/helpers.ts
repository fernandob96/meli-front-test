
/** Function that receives an amount, currency and decimals and returns the value with a money mask.  */
export const moneyMask = (amount: number, currency: string, decimals: number) => {
    return Number(amount).toLocaleString("es-AR", {
        style: "currency",
        currency: currency,
        minimumFractionDigits: decimals,
    })
};

/** Function that returns a string with the first letter in capital letters */
export const firstLetterUppercase = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}