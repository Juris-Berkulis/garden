class RandomNumber {
    constructor () {

    };

    static create (maxNumber) {
        return Math.floor(Math.random() * maxNumber)
    };
};
