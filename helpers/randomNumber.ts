export const randomNumber = (): number => {
    return Math.floor(Math.random() * 10000);
};

export const randomNumberRange = (min, max): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
